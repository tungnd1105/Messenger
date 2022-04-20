package com.ndtung.services;

import org.springframework.context.ApplicationEvent;

/**
 * @author Duc Tung on 17/03/2022
 * @project Messenger-Application
 * @package com.ndtung.services
 */
public class Event extends ApplicationEvent {
  public Event(Object source) {
    super(source);
  }
}
