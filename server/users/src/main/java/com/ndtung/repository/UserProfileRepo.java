package com.ndtung.repository;

import com.ndtung.entity.UserProfile;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

/**
 * @author Duc Tung on 17/03/2022
 * @project Server
 * @package com.ndtung
 */

@Repository
public interface UserProfileRepo extends ReactiveMongoRepository<UserProfile, String> {

  Mono<UserProfile> findByAccountUsername(String username);

  @Query(" { 'account.email_list' : { '$elemMatch' : { 'email' : ?0 } } } ")
  Mono<UserProfile> findByAccountEmailList(String email);

  @Query(" { 'account.phone_number_list' : { $elemMatch : { 'phone_number' : ?0 } } } ")
  Mono<UserProfile> findByAccountPhoneNumberList(String phoneNumber);

}
