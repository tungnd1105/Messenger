package com.ndtung.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import org.springframework.data.mongodb.core.index.Indexed;
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
public class PhoneNumber extends BaseEntity {

  @Indexed(unique = true)
  @Field(name = "phone_number", targetType = FieldType.STRING)
  @NotBlank(message = "phone number require")
  @Pattern(regexp = "^[0-9]+$", message = "phone number must be number")
  @Length(min = 6, max = 20, message = "phone number must be between 6 and 20 characters")
  private String phoneNumber;

  @Field(name = "is_hidden", targetType = FieldType.BOOLEAN)
  private boolean isHidden;

  @Field(name = "is_primary", targetType = FieldType.BOOLEAN)
  private boolean isPrimary;

  @Field(name = "is_active", targetType = FieldType.BOOLEAN)
  private boolean isActive;
}
