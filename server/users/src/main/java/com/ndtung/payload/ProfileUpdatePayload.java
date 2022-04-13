package com.ndtung.payload;

import com.ndtung.entity.enums.EGender;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

/**
 * @author Duc Tung on 17/03/2022
 * @project Messenger-Application
 * @package com.ndtung.payload
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProfileUpdatePayload {

  @NotBlank(message = "firstname is required")
  private String firstname;
  @NotBlank(message = "lastname required")
  private String lastname;
  private Integer age;
  private EGender gender;
  private String birthday;
  private String address;
  private String about;
}
