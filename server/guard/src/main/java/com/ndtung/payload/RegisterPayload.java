package com.ndtung.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

/**
 * @author Duc Tung on 17/03/2022
 * @project Server
 * @package com.ndtung
 */


@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterPayload  {
  @NotBlank(message = "firstname required")
  private String firstname;
  @NotBlank(message = "lastname required")
  private String lastname;
  @NotBlank(message = "username required")
  private String username;
  @NotBlank(message = "password required")
  private String password;
  @NotBlank(message = "email required")
  private String email;
  @NotBlank(message = "phone number required")
  private String phoneNumber;
}
