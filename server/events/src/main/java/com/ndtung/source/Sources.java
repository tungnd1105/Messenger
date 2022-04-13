package com.ndtung.source;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Duc Tung on 17/03/2022
 * @project Messenger-Application
 * @package com.ndtung.source
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Sources {

  private String user;
  private String dataType;
  private Object data;

}
