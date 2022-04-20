package com.ndtung.controller;

import com.ndtung.entity.UserProfile;
import com.ndtung.payload.ProfileUpdatePayload;
import com.ndtung.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

/**
 * @author Duc Tung on 17/03/2022
 * @project Messenger-Application
 * @package com.ndtung.controller
 */

@RestController
@SchemaMapping(typeName = "Query")
@PreAuthorize("hasPermission('access','user')")
public class UserController {

  private final UserServices userServices;

  @Autowired
  public UserController(UserServices userServices) {
    this.userServices = userServices;
  }

  @QueryMapping(value = "getProfile")
  public Mono<UserProfile> getProfile() {
    return userServices.getProfile();
  }

  @MutationMapping(value = "updateProfile")
  public Mono<UserProfile> updateProfile(@Valid @Argument ProfileUpdatePayload profileUpdatePayload) {
    return userServices.updateProfile(profileUpdatePayload);
  }

  @MutationMapping(value = "updateAvatar")
  public Mono<String> updateProfile(@Valid @Argument String path) {
    return userServices.updateAvatar(path);
  }

}
