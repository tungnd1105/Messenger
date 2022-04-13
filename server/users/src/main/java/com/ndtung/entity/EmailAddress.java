package com.ndtung.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

/**
 * @author Duc Tung on 17/03/2022
 * @project Server
 * @package com.ndtung
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class EmailAddress extends BaseEntity {

  @Indexed(unique = true)
  @Field(name = "email", targetType = FieldType.STRING)
  @NotBlank(message = "email require")
  @Length(min = 6, max = 50, message = "email must be between 6 and 50 characters")
  @Email(regexp = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", message = " email is not matches type ")
  private String email;

  @Field(name = "is_hidden", targetType = FieldType.BOOLEAN)
  private boolean isHidden;

  @Field(name = "ís_primary", targetType = FieldType.BOOLEAN)
  private boolean isPrimary;

  @Field(name = "is_active", targetType = FieldType.BOOLEAN)
  private boolean isActive;

}
