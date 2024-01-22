import { IPublisher } from "../IPublisher";
import { NoSubscriberForEvent } from "../NoSubscriberForEvent";
import { ISubscriber } from "../ISubscriber";

export class Publisher implements IPublisher {
  private subscribers: Map<string, Array<ISubscriber>>;
  
  constructor() {
    this.subscribers = new Map<string, Array<ISubscriber>>();
  }

  public Subscribe(eventName: string, subscriber: ISubscriber): void {
    let eventSubscribers: Array<ISubscriber> | undefined = this.subscribers.get(eventName);
    
    if (!eventSubscribers) {
      eventSubscribers = new Array<ISubscriber>();
      this.subscribers.set(eventName, eventSubscribers);
    }

    eventSubscribers!.push(subscriber);
  }

  public Unsubscribe(eventName: string, subscriber: ISubscriber): void {
    if (!this.subscribers.has(eventName))
      throw new NoSubscriberForEvent(eventName);

    const eventSubscribers: Array<ISubscriber> = this.subscribers.get(eventName)!;
    eventSubscribers.splice(eventSubscribers.indexOf(subscriber), 1);
  }

  public async PublishEvent<TEvent>(eventName: string, event: TEvent): Promise<void> {
    if (!this.subscribers.has(eventName))
      throw new NoSubscriberForEvent(eventName);
    
    const eventSubscribers: Array<ISubscriber> | undefined = this.subscribers.get(eventName);
    
    if (eventSubscribers)
      await Promise.all(eventSubscribers.map(subscriber => subscriber.HandleEvent(event)));
  }
}