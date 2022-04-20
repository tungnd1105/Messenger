package com.ndtung.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

/**
 * @author Duc Tung on 17/03/2022
 * @project Server
 * @package com.ndtung
 */


@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthPayload {
  private String username;
  private Collection<? extends GrantedAuthority> authorities;
  private TokenPayload token;
}
