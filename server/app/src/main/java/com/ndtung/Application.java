package com.ndtung;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;

/**
 * @author Duc Tung on 18/03/2022
 * @project Server
 * @package com.ndtung
 */

@SpringBootApplication
@EntityScan(basePackages = {"com.*"})
@ComponentScan(basePackages = {"com.*"})
@EnableReactiveMongoRepositories(basePackages = {"com.*"})
public class Application {
  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }
}
