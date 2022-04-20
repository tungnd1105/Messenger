package com.ndtung.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Duc Tung on 17/03/2022
 * @project Server
 * @package com.ndtung
 */


@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginPayload {

  private String username;
  private String password;
}
