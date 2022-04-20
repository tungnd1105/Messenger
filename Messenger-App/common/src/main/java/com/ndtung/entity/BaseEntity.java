package com.ndtung.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * @author Duc Tung on 18/03/2022
 * @project Server
 * @package com.ndtung.entity
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BaseEntity {

  @Field(value = "create_at")
  private String createAt;

  @Field(value = "update_at")
  private String updateAt;

}
