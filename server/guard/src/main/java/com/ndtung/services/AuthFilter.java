package com.ndtung.services;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.ndtung.repository.UserProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.ReactiveSecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.Collection;

/**
 * @author Duc Tung on 18/03/2022
 * @project Server
 * @package com.ndtung.services
 */
@Component
public class AuthFilter implements WebFilter {

  private final UserProfileRepo userProfileRepo;

  @Autowired
  public AuthFilter(UserProfileRepo userProfileRepo) {
    this.userProfileRepo = userProfileRepo;
  }

  @Override
  public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
    return Mono.justOrEmpty(exchange.getRequest().getHeaders().getFirst(HttpHeaders.AUTHORIZATION))
      .filter(authorization -> authorization.startsWith(AuthServices.tokenPrefix))
      .flatMap(authorization -> Mono.just(authorization.substring(AuthServices.tokenPrefix.length())))
      .flatMap(token -> Mono.just(JWT.require(Algorithm.HMAC256(AuthServices.tokenSecret.getBytes())).build())
        .flatMap(jwtVerifier -> Mono.just(jwtVerifier.verify(token))
          .flatMap(decodedJWT -> Mono.just(decodedJWT.getClaim("authorities"))
            .flatMap(authorities -> {
                Collection<SimpleGrantedAuthority> grantedAuthorities = new ArrayList<>();
                grantedAuthorities.add(new SimpleGrantedAuthority(authorities.toString()));
                return userProfileRepo.findByAccountUsername(decodedJWT.getSubject())
                  .flatMap(userProfile -> {
                    Authentication authentication = new UsernamePasswordAuthenticationToken(userProfile, decodedJWT.getToken(), grantedAuthorities);
                    return Mono.just(authentication);
                  }).flatMap(authentication -> chain.filter(exchange).contextWrite(ReactiveSecurityContextHolder.withAuthentication(authentication)));
              }
            )
          )
        )).switchIfEmpty(Mono.defer(() -> chain.filter(exchange)));
  }
}
