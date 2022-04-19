package com.ndtung.services;

import com.ndtung.repository.InboxRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessagesServices {

  private final InboxRepo inboxRepo;

  @Autowired
  public MessagesServices(InboxRepo inboxRepo){
    this.inboxRepo = inboxRepo;
  }

}
