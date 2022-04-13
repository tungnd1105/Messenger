package com.ndtung.services;

import com.ndtung.entity.UserProfile;
import org.springframework.security.access.PermissionEvaluator;
import org.springframework.security.core.Authentication;

import java.io.Serializable;

/**
 * @author Duc Tung on 18/03/2022
 * @project Server
 * @package com.ndtung.services
 */
public class AuthPermission implements PermissionEvaluator {

  @Override
  public boolean hasPermission(Authentication authentication, Object targetDomainObject, Object permission) {
    if(authentication != null && authentication.getPrincipal() instanceof UserProfile && targetDomainObject != null && permission instanceof String){
      return hasPrivilege(authentication,String.valueOf(permission));
    }
    return false;
  }

  @Override
  public boolean hasPermission(Authentication authentication, Serializable targetId, String targetType, Object permission) {
    if(authentication != null  && authentication.getPrincipal() instanceof UserProfile && authentication.getPrincipal() instanceof UserProfile && permission instanceof String){
      return hasPrivilege(authentication,String.valueOf(permission));
    }
    return false;
  }

  public Boolean hasPrivilege(Authentication auth, String permission){
    UserProfile userProfile =  (UserProfile)  auth.getPrincipal();
    return userProfile.getAccount().getAuthorities().stream()
      .anyMatch(simpleGrantedAuthority -> simpleGrantedAuthority.getAuthority().equalsIgnoreCase(permission));
  }
}
