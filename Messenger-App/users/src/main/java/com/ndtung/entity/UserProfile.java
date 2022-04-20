package com.ndtung.entity;

import com.ndtung.entity.enums.EGender;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;

import javax.validation.constraints.Pattern;
import java.time.LocalDate;

/**
 * @author Duc Tung on 17/03/2022
 * @project Server
 * @package com.ndtung
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(value = "user_profile")
@EqualsAndHashCode(callSuper = true)
public class UserProfile extends BaseUser {

  @Field(name = "age", targetType = FieldType.INT32)
  @Pattern(regexp = "^[0-9]+$", message = "age must be number")
  private Integer age;

  @Field(name = "gender", targetType = FieldType.STRING)
  private EGender gender;

  @Field(name = "birthday", targetType = FieldType.STRING)
  private LocalDate birthday;

  @Field(name = "address", targetType = FieldType.STRING)
  private String address;

  @Field(name = "about", targetType = FieldType.STRING)
  private String about;

  @Field(name = "account")
  private Account account;

}
