package com.ndtung.repository;

import com.ndtung.entity.Inbox;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

/**
 * @author Duc Tung on 17/03/2022
 * @project Server
 * @package com.ndtung
 */


@Repository
public interface InboxRepo extends ReactiveMongoRepository<Inbox, String> {

  Mono<Inbox> findByIdUser(String idUser);

}
