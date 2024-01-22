export abstract class Event {
  private eventName: string;

  public constructor(eventName: string) {
    this.eventName = eventName;
  }

  public get EventName() { return this.eventName; }
}