package com.ndtung.services;

import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import reactor.core.publisher.FluxSink;

import java.util.concurrent.BlockingQueue;
import java.util.concurrent.Executor;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.function.Consumer;

/**
 * @author Duc Tung on 17/03/2022
 * @project Messenger-Application
 * @package com.ndtung.services
 */

@Component
public class EventPublisher implements ApplicationListener<Event>, Consumer<FluxSink<Event>> {

  private final Executor executor;
  private final BlockingQueue<Event> queue = new LinkedBlockingQueue<>();

  public EventPublisher(Executor executor) {
    this.executor = executor;
  }


  @Override
  public void onApplicationEvent(Event event) {
    this.queue.add(event);
  }

  @Override
  public void accept(FluxSink<Event> sink) {
    this.executor.execute(() -> {
      while (true)
        try {
          Event event = queue.take();
          sink.next(event);
        } catch (InterruptedException e) {
          e.printStackTrace();
          break;
        }
    });
  }
}
