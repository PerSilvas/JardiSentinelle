export class NoSubscriberForEvent extends Error {
  public constructor(eventName: string) {
    super(`No subscriber for event named ${eventName}.`);
  }
}