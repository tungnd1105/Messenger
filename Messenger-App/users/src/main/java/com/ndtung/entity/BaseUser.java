package com.ndtung.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

/**
 * @author Duc Tung on 17/03/2022
 * @project Server
 * @package com.ndtung
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class BaseUser extends BaseEntity {

  @Id
  @Field(targetType = FieldType.OBJECT_ID)
  private String id;

  @Field(name = "first_name", targetType = FieldType.STRING)
  @NotBlank(message = "user require firstname")
  @Pattern(regexp = "^[A-Z]+$", message = "firstname must not contain special characters ")
  @Length(min = 6, max = 30, message = "firstname must be between 6 and 30 characters")
  private String firstname;

  @Field(name = "last_name", targetType = FieldType.STRING)
  @NotBlank(message = "user require lastname")
  @Pattern(regexp = "^[A-Z]+$", message = "lastname must not contain special characters ")
  @Length(min = 6, max = 30, message = "lastname must be between 6 and 30 characters")
  private String lastname;

  @Field(name = "path_avatar", targetType = FieldType.STRING)
  private String pathAvatar;

}
