package com.ndtung.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.TimeZone;

/**
 * @author Duc Tung on 17/03/2022
 * @project Server
 * @package com.ndtung
 */


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Content {

  @NotBlank(message = "message content require sender name")
  @Field(name = "sender_name",targetType = FieldType.STRING)
  private String senderId;

  @NotBlank(message = "message content require text")
  @Field(name = "text",targetType = FieldType.STRING)
  private String text;

  @Field(name = "timestamp")
  private String timestamp;

  @Field(name = "is_unsent",targetType = FieldType.BOOLEAN)
  private Boolean isUnsent;

  @Field(name = "is_unread",targetType = FieldType.BOOLEAN)
  private Boolean isUnread;

  @Field(name = "is_deleted",targetType = FieldType.BOOLEAN)
  private Boolean isDeleted;

}