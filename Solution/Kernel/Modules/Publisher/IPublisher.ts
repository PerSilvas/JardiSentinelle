import { ISubscriber } from "./ISubscriber";

export interface IPublisher {
  Subscribe(eventName: string, subscriber: ISubscriber): void;
  Unsubscribe(eventName: string, subscriber: ISubscriber): void;
  PublishEvent<TEvent>(eventName: string, event: TEvent): Promise<void>;
}