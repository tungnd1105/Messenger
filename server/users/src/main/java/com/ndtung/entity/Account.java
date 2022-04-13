package com.ndtung.entity;


import com.ndtung.entity.enums.EAccountState;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.*;

/**
 * @author Duc Tung on 17/03/2022
 * @project Server
 * @package com.ndtung
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Account {

  @Field(targetType = FieldType.STRING)
  @NotBlank(message = "account require username")
  @Pattern(regexp = "^[A-Za-z0-9_.]+$", message = "username must not contain special characters ")
  @Length(min = 6, max = 30, message = "username must be between 6 and 30 characters")
  private String username;

  @Field(name = "password", targetType = FieldType.STRING)
  @Length(min = 6, message = "password must be at least  6 characters or mores")
  @NotBlank(message = "account require password")
  private String password;

  @Min(value = 1, message = "account require an email")
  @Field(name = "email_list", targetType = FieldType.ARRAY)
  private List<EmailAddress> emailList = new ArrayList<>();

  @Min(value = 1, message = "account require a phone number")
  @Field(name = "phone_number_list", targetType = FieldType.ARRAY)
  private List<PhoneNumber> phoneNumberList = new ArrayList<>();

  @Field(name = "account_state", targetType = FieldType.STRING)
  private EAccountState accountState;

  @Field(name = "is_active", targetType = FieldType.BOOLEAN)
  private boolean isActive;

  @Min(value = 1, message = "account require a role")
  @Field(name = "roles", targetType = FieldType.ARRAY)
  private Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();

}
