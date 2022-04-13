package com.ndtung.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Duc Tung on 17/03/2022
 * @project Server
 * @package com.ndtung
 */


@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(value = "inbox")
public class Inbox {

  @Id
  @Field(targetType = FieldType.OBJECT_ID)
  private String id;

  @NotBlank(message = "inbox require id user")
  @Field(name = "id_user", targetType = FieldType.STRING)
  private String idUser;

  @Field(name = "messages", targetType = FieldType.ARRAY)
  private List<Messenger> messengers = new ArrayList<>();

}
