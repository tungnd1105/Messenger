package com.ndtung.controller;

import com.ndtung.payload.AuthPayload;
import com.ndtung.payload.LoginPayload;
import com.ndtung.payload.RegisterPayload;
import com.ndtung.payload.TokenPayload;
import com.ndtung.services.AuthServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

/**
 * @author Duc Tung on 17/03/2022
 * @project Server
 * @package com.ndtung
 */


@RestController
@PreAuthorize("hasAnyAuthority('ROLE_ANONYMOUS')")
@SchemaMapping(typeName = "Query")
public class AuthController {

  private final AuthServices authServices;

  @Autowired
  public AuthController(AuthServices authServices) {
    this.authServices = authServices;
  }

  @MutationMapping(value = "register")
  public Mono<String> register(@Valid @Argument RegisterPayload registerPayload) {
    System.out.println(registerPayload);
    return authServices.register(registerPayload);
  }

  @MutationMapping(value = "login")
  public Mono<AuthPayload> login(@Valid @Argument LoginPayload loginPayload){
    return authServices.login(loginPayload);
  }

  @QueryMapping(value = "refreshToken")
  public Mono<TokenPayload> refreshToken(ServerWebExchange serverWebExchange){
    System.out.println(serverWebExchange);
    return authServices.refreshToken(serverWebExchange);
  }

}
