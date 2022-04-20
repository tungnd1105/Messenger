package com.ndtung.services;

import com.ndtung.entity.enums.EAccountState;
import com.ndtung.repository.UserProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.ReactiveUserDetailsService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

/**
 * @author Duc Tung on 17/03/2022
 * @project Server
 * @package com.ndtung
 */


@Service
public class AccountDetailsService implements ReactiveUserDetailsService {

  private final UserProfileRepo userProfileRepo;

  @Autowired
  public AccountDetailsService(UserProfileRepo userProfileRepo) {
    this.userProfileRepo = userProfileRepo;
  }

  @Override
  public Mono<UserDetails> findByUsername(String username) {
    return this.userProfileRepo.findByAccountUsername(username)
      .switchIfEmpty(Mono.error(new UsernameNotFoundException("")))
      .flatMap(userProfile -> {
        userProfile.getAccount().setAccountState(EAccountState.online);
        return Mono.just(userProfile);
      }).flatMap(userProfileRepo::save).
      flatMap(userProfile -> Mono.just(new AccountDetails(userProfile.getAccount())));
  }

}
