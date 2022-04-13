package com.ndtung.services;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.ndtung.config.WebSocketConfig;
import org.springframework.context.ApplicationContext;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.server.RequestUpgradeStrategy;
import org.springframework.web.reactive.socket.server.support.HandshakeWebSocketService;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

public class HandShakeServices extends HandshakeWebSocketService {

  public ApplicationContext applicationContext;

  public HandShakeServices(RequestUpgradeStrategy upgradeStrategy, ApplicationContext applicationContext) {
    super(upgradeStrategy);
    this.applicationContext = applicationContext;
  }

  @Override
  public Mono<Void> handleRequest(ServerWebExchange exchange, WebSocketHandler handler) {
    return Mono.justOrEmpty(exchange.getRequest().getQueryParams().get("token"))
      .onErrorResume(Mono::error)
      .flatMap(s -> Mono.just(exchange.getRequest().getQueryParams().get("token").get(0))
        .flatMap(token -> Mono.just(JWT.require(Algorithm.HMAC256(AuthServices.tokenSecret.getBytes())).build())
          .flatMap(jwtVerifier -> Mono.just(jwtVerifier.verify(token))
            .onErrorResume(Mono::error)
            .flatMap(decodedJWT -> {
              WebSocketConfig websocketConfig = applicationContext.getBean(WebSocketConfig.class);
              websocketConfig.setUser(decodedJWT.getSubject());
              return super.handleRequest(exchange, handler);
            })
          )
        )
      );
  }
}