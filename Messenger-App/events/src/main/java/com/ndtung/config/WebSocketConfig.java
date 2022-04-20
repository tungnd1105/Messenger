package com.ndtung.config;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ndtung.services.Event;
import com.ndtung.services.EventPublisher;
import com.ndtung.services.HandShakeServices;
import com.ndtung.source.Sources;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.HandlerMapping;
import org.springframework.web.reactive.handler.SimpleUrlHandlerMapping;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.server.WebSocketService;
import org.springframework.web.reactive.socket.server.support.WebSocketHandlerAdapter;
import org.springframework.web.reactive.socket.server.upgrade.ReactorNettyRequestUpgradeStrategy;
import reactor.core.publisher.Flux;

import java.util.Collections;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

@Configuration
public class WebSocketConfig {

  public String user;
  public ApplicationContext applicationContext;

  public WebSocketConfig(ApplicationContext applicationContext) {
    this.applicationContext = applicationContext;
  }

  public void setUser(String user) {
    this.user = user;
  }

  @Bean
  Executor executor() {
    return Executors.newSingleThreadExecutor();
  }

  @Bean
  public HandlerMapping handlerMapping(WebSocketHandler wsh) {
    SimpleUrlHandlerMapping mapping = new SimpleUrlHandlerMapping();
    mapping.setUrlMap(Collections.singletonMap("/ws", wsh));
    mapping.setOrder(10);
    return mapping;
  }

  @Bean
  public WebSocketService webSocketService() {
    ReactorNettyRequestUpgradeStrategy strategy = new ReactorNettyRequestUpgradeStrategy();
    return new HandShakeServices(strategy, applicationContext);
  }

  @Bean
  WebSocketHandlerAdapter webSocketHandlerAdapter() {
    return new WebSocketHandlerAdapter(webSocketService());
  }

  @Bean
  WebSocketHandler webSocketHandler(EventPublisher eventPublisher) {
    Flux<Event> publish = Flux.create(eventPublisher).share();
    return session -> {
      Flux<WebSocketMessage> messageFlux = publish.mapNotNull(event -> {
        String messages = null;
        Sources sources = (Sources) event.getSource();
        if (sources.getUser().matches(this.user)) {
          ObjectMapper objectMapper = new ObjectMapper();
          try {
            messages = objectMapper.writeValueAsString(sources);
          } catch (JsonProcessingException e) {
            e.printStackTrace();
          }
        }
        return messages;
      }).map(session::textMessage);
      return session.send(messageFlux);
    };
  }
}
