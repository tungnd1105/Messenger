package com.ndtung.services;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.ndtung.entity.*;
import com.ndtung.entity.enums.EAuthorities;
import com.ndtung.payload.AuthPayload;
import com.ndtung.payload.LoginPayload;
import com.ndtung.payload.RegisterPayload;
import com.ndtung.payload.TokenPayload;
import com.ndtung.repository.AuthoritiesRepo;
import com.ndtung.repository.InboxRepo;
import com.ndtung.repository.UserProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.ReactiveAuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.io.File;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.stream.Collectors;

/**
 * @author Duc Tung on 17/03/2022
 * @project Server
 * @package com.ndtung
 */


@Service
public class AuthServices {

  public static String tokenSecret = "nsndsnsddfs";
  public static String tokenPrefix = "Bearer ";

  private final InboxRepo inboxRepo;
  private final UserProfileRepo userProfileRepo;
  private final AuthoritiesRepo authoritiesRepo;
  private final PasswordEncoder passwordEncoder;
  private final AccountDetailsService accountDetailService;
  private final ReactiveAuthenticationManager authenticationManager;

  @Autowired
  public AuthServices(
    InboxRepo inboxRepo, UserProfileRepo userProfileRepo, AuthoritiesRepo authoritiesRepo, PasswordEncoder passwordEncoder,
    AccountDetailsService accountDetailService, ReactiveAuthenticationManager authenticationManager
  ) {
    this.inboxRepo = inboxRepo;
    this.userProfileRepo = userProfileRepo;
    this.authoritiesRepo = authoritiesRepo;
    this.passwordEncoder = passwordEncoder;
    this.accountDetailService = accountDetailService;
    this.authenticationManager = authenticationManager;
  }

  public Mono<AuthPayload> login(LoginPayload loginPayload) {
    return Mono.just(loginPayload)
      .flatMap(payload ->
        authenticationManager.authenticate(
          new UsernamePasswordAuthenticationToken(payload.getUsername(), payload.getPassword())
        ).flatMap(this::generateToken)
      );
  }

  public Mono<AuthPayload> generateToken(Authentication authentication) {
    System.out.println(authentication.getPrincipal());
    return Mono.just(JWT.create()
      .withSubject(authentication.getName())
      .withClaim("authorities",
        authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList())
      )
      .withExpiresAt(new Date(System.currentTimeMillis() + 60 * 5 * 1000))
      .sign(Algorithm.HMAC256(tokenSecret.getBytes()))
    ).flatMap(accessToken -> Mono.just(JWT.create()
        .withSubject(authentication.getName())
        .withExpiresAt(new Date(System.currentTimeMillis() + 60 * 50 * 10000))
        .sign(Algorithm.HMAC256(tokenSecret.getBytes()))
      ).flatMap(refreshToken -> Mono.just(
          new AuthPayload(
            authentication.getName(),
            authentication.getAuthorities(),
            new TokenPayload(accessToken, refreshToken)
          )
        )
      )
    );
  }

  private EmailAddress addEmail(String email) {
    EmailAddress emailAddress = new EmailAddress();
    emailAddress.setActive(false);
    emailAddress.setHidden(false);
    emailAddress.setPrimary(false);
    emailAddress.setEmail(email);
    emailAddress.setCreateAt(ZonedDateTime.now(ZoneId.systemDefault()).toString());
    return emailAddress;
  }

  private PhoneNumber addPhoneNumber(String phoneNumber) {
    PhoneNumber newPhoneNumber = new PhoneNumber();
    newPhoneNumber.setActive(false);
    newPhoneNumber.setHidden(false);
    newPhoneNumber.setPrimary(false);
    newPhoneNumber.setPhoneNumber(phoneNumber);
    newPhoneNumber.setCreateAt(ZonedDateTime.now(ZoneId.systemDefault()).toString());
    return newPhoneNumber;
  }

  public Mono<String> register(RegisterPayload payload) {
    return userProfileRepo.findByAccountUsername(payload.getUsername())
      .flatMap(a -> Mono.error(new ResponseStatusException(HttpStatus.CONFLICT, "username conflict")))
      .switchIfEmpty(userProfileRepo.findByAccountEmailList(payload.getEmail()))
      .flatMap(a -> Mono.error(new ResponseStatusException(HttpStatus.CONFLICT, "email conflict")))
      .switchIfEmpty(userProfileRepo.findByAccountPhoneNumberList(payload.getPhoneNumber()))
      .flatMap(a -> Mono.error(new ResponseStatusException(HttpStatus.CONFLICT, "phone number conflict")))
      .switchIfEmpty(authoritiesRepo.findByName(EAuthorities.user)
        .flatMap(authorities -> {
          UserProfile userProfile = new UserProfile();
          Account account = new Account();
          userProfile.setFirstname(payload.getFirstname());
          userProfile.setLastname(payload.getLastname());
          account.setUsername(payload.getUsername());
          account.setPassword(passwordEncoder.encode(payload.getPassword()));
          account.getEmailList().add(addEmail(payload.getEmail()));
          account.getPhoneNumberList().add(addPhoneNumber(payload.getPhoneNumber()));
          account.getAuthorities().add(new SimpleGrantedAuthority(authorities.getName().toString()));
          account.setActive(false);
          userProfile.setAccount(account);
          userProfile.setCreateAt(ZonedDateTime.now(ZoneId.systemDefault()).toString());
          return userProfileRepo.save(userProfile)
            .flatMap(user -> Mono.just(new File("classpath:avatar-default.png"))
              .flatMap(file -> {
                user.setPathAvatar(file.getName() + "_" + user.getId());
                return userProfileRepo.save(user);
              }).flatMap(e -> {
                Inbox inbox = new Inbox();
                inbox.setIdUser(e.getId());
                return inboxRepo.save(inbox);
              })
            );
        })).flatMap(s -> Mono.just("your account created"));
  }

  public Mono<TokenPayload> refreshToken(ServerWebExchange serverWebExchange) {
    return Mono.justOrEmpty(serverWebExchange.getRequest().getHeaders().getFirst(HttpHeaders.AUTHORIZATION))
      .filter(authorization -> authorization.startsWith(AuthServices.tokenPrefix))
      .flatMap(authorization -> Mono.just(authorization.substring(AuthServices.tokenPrefix.length())))
      .flatMap(refreshToken -> Mono.just(JWT.require(Algorithm.HMAC256(AuthServices.tokenSecret.getBytes())).build())
        .flatMap(jwtVerifier -> Mono.just(jwtVerifier.verify(refreshToken))
          .onErrorResume(throwable -> Mono.error(new AccessDeniedException(throwable.getMessage())))
          .flatMap(decodedJWT -> accountDetailService.findByUsername(decodedJWT.getSubject())
            .flatMap(userDetails -> Mono.just(JWT.create()
                .withSubject(userDetails.getUsername())
                .withClaim("authorities",
                  userDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList())
                )
                .withExpiresAt(new Date(System.currentTimeMillis() + 60 * 5 * 1000))
                .sign(Algorithm.HMAC256(tokenSecret.getBytes()))
              ).flatMap(accessToken -> Mono.just(new TokenPayload(accessToken, refreshToken)))
            )
          )
        ));
  }

}
