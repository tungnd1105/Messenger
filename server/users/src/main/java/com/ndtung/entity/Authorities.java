package com.ndtung.entity;

import com.ndtung.entity.enums.EAuthorities;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;

/**
 * @author Duc Tung on 17/03/2022
 * @project Server
 * @package com.ndtung
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(value = "authorities")
public class Authorities {

  @Id
  @Field(targetType = FieldType.OBJECT_ID)
  private String id;

  @Field(name = "name", targetType = FieldType.STRING)
  private EAuthorities name;

  @Field(name = "note", targetType = FieldType.STRING)
  private String note;

}
