package com.ndtung.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;

import javax.validation.constraints.Min;
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
@EqualsAndHashCode(callSuper = true)
public class Messenger extends BaseEntity {

  @NotBlank(message = "message require title")
  @Field(name = "title",targetType = FieldType.STRING)
  private String title;

  @Field(name = "filter",targetType = FieldType.BOOLEAN)
  private Boolean filter;

  @Field(name = "is_still_participant",targetType = FieldType.BOOLEAN)
  private Boolean isStillParticipant;

  @Min(value = 2, message = "message require two participant")
  @Field(name = "participants",targetType = FieldType.ARRAY)
  private List<Participant> participants = new ArrayList<>();

  @Field(name = "content",targetType = FieldType.ARRAY)
  private List<Content> content = new ArrayList<>();

}
