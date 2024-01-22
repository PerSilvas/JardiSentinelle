import { IPublisher } from "../Kernel/Publisher/IPublisher";
import { ISubscriber } from "../Kernel/Publisher/ISubscriber";

export abstract class BaseApplication implements IPublisher {
  private publisher: IPublisher;

  public constructor(publisher: IPublisher) {
    this.publisher = publisher;
  }

  public Subscribe(eventName: string, subscriber: ISubscriber): void {
    this.publisher.Subscribe(eventName, subscriber);
  }

  public Unsubscribe(eventName: string, subscriber: ISubscriber): void {
    this.publisher.Unsubscribe(eventName, subscriber);
  }

  public async PublishEvent<TEvent>(eventName: string, event: TEvent): Promise<void> {
    await this.publisher.PublishEvent(eventName, event);
  }

  public abstract Initialise(): Promise<void>;
  
  public abstract StartUp(): Promise<void>;
  
  public abstract ShutDown(): Promise<void>;
}