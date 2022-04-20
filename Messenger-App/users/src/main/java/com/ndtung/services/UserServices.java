package com.ndtung.services;

import com.ndtung.entity.UserProfile;
import com.ndtung.payload.ProfileUpdatePayload;
import com.ndtung.repository.UserProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.ReactiveSecurityContextHolder;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

/**
 * @author Duc Tung on 17/03/2022
 * @project Messenger-Application
 * @package com.ndtung.services
 */
@Service
public class UserServices {

  private final UserProfileRepo userProfileRepo;

  @Autowired
  public UserServices(UserProfileRepo userProfileRepo){
    this.userProfileRepo = userProfileRepo;
  }

  public Mono<UserProfile> getProfile(){
    return ReactiveSecurityContextHolder.getContext()
      .flatMap(securityContext -> Mono.just((UserProfile) securityContext.getAuthentication().getPrincipal()));
  }


  public Mono<String> updateAvatar(String path){
    return ReactiveSecurityContextHolder.getContext()
      .flatMap(securityContext -> Mono.just((UserProfile) securityContext.getAuthentication().getPrincipal()))
      .flatMap(userProfile -> {
        userProfile.setPathAvatar(path);
        userProfileRepo.save(userProfile);
        return Mono.just(userProfile.getPathAvatar());
      });
  }

  public Mono<UserProfile> updateProfile(ProfileUpdatePayload profileUpdatePayload){
   return ReactiveSecurityContextHolder.getContext()
     .flatMap(securityContext -> Mono.just((UserProfile) securityContext.getAuthentication().getPrincipal()))
     .flatMap(userProfile -> {
       DateTimeFormatter formatter = DateTimeFormatter.ofPattern("d/MM/yyyy");
       userProfile.setFirstname(profileUpdatePayload.getFirstname());
       userProfile.setLastname(profileUpdatePayload.getLastname());
       userProfile.setBirthday(LocalDate.parse(profileUpdatePayload.getBirthday(),formatter));
       userProfile.setGender(profileUpdatePayload.getGender());
       userProfile.setAge(profileUpdatePayload.getAge());
       userProfile.setAddress(profileUpdatePayload.getAddress());
       userProfile.setAbout(profileUpdatePayload.getAbout());
       userProfile.setUpdateAt(ZonedDateTime.now(ZoneId.systemDefault()).toString());
       return userProfileRepo.save(userProfile);
     });
  }

}
