package com.ndtung.config;

import com.ndtung.repository.UserProfileRepo;
import com.ndtung.services.AccountDetailsService;
import com.ndtung.services.AuthFilter;
import com.ndtung.services.AuthPermission;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler;
import org.springframework.security.authentication.ReactiveAuthenticationManager;
import org.springframework.security.authentication.UserDetailsRepositoryReactiveAuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableReactiveMethodSecurity;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.SecurityWebFiltersOrder;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.security.web.server.context.NoOpServerSecurityContextRepository;

/**
 * @author Duc Tung on 17/03/2022
 * @project Server
 * @package com.ndtung
 */


@EnableWebFluxSecurity
@EnableReactiveMethodSecurity
public class SecurityConfig {

  private final UserProfileRepo userProfileRepo;
  private final ApplicationContext applicationContext;

  @Autowired
  public SecurityConfig(UserProfileRepo userProfileRepo, ApplicationContext applicationContext) {
    this.userProfileRepo = userProfileRepo;
    this.applicationContext = applicationContext;
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean
  public AuthPermission authPermission(){
    return new AuthPermission();
  }

  @Bean
  public ReactiveAuthenticationManager reactiveAuthenticationManager(
    AccountDetailsService accountDetailService, PasswordEncoder passwordEncoder) {
    UserDetailsRepositoryReactiveAuthenticationManager authenticationManager
      = new UserDetailsRepositoryReactiveAuthenticationManager(accountDetailService);
    authenticationManager.setPasswordEncoder(passwordEncoder);
    return authenticationManager;
  }

  @Bean
  SecurityWebFilterChain springWebFilterChain(ServerHttpSecurity http, ReactiveAuthenticationManager reactiveAuthenticationManager) {
    DefaultMethodSecurityExpressionHandler defaultWebSecurityExpressionHandler =
      this.applicationContext.getBean(DefaultMethodSecurityExpressionHandler.class);
    defaultWebSecurityExpressionHandler.setPermissionEvaluator(authPermission());
    return http.csrf(ServerHttpSecurity.CsrfSpec::disable)
      .httpBasic(ServerHttpSecurity.HttpBasicSpec::disable)
      .authenticationManager(reactiveAuthenticationManager)
      .securityContextRepository(NoOpServerSecurityContextRepository.getInstance())
      .authorizeExchange(exchangeSpec ->
        exchangeSpec
          .pathMatchers("/graphql/**", "/ws/**").permitAll()
          .anyExchange().authenticated()
      )
      .addFilterAt(new AuthFilter(userProfileRepo), SecurityWebFiltersOrder.HTTP_BASIC)
      .build();
  }

}
