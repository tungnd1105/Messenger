package com.ndtung.repository;

import com.ndtung.entity.Authorities;
import com.ndtung.entity.enums.EAuthorities;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Mono;

/**
 * @author Duc Tung on 17/03/2022
 * @project Server
 * @package com.ndtung
 */


public interface AuthoritiesRepo extends ReactiveMongoRepository<Authorities, String> {
  Mono<Authorities> findByName(EAuthorities name);
}

