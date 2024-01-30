import { IPublisher } from "./IPublisher";

/**
 * Represents a subscriber that handles domain events.
 */
export interface ISubscriber {
  /**
   * Handles the specified domain event.
   * @param event The domain event to handle.
   * @returns A promise that resolves when the event is handled.
   */
  HandleEvent(event: unknown): Promise<void>;

  /**
   * Subscribes to an event.
   * @param event - The string type of the event to subscribe to.
  */
  SubscribeToEvent(eventName: string, publisher: IPublisher): void;
}