import { Task } from "../Task";

export class DynamicTask extends Task {
  private attributes: Map<string, unknown>;

  public constructor(name: string) {
    super(name);
    this.attributes = new Map<string, unknown>();
  }

  public SetAttribute(key: string, value: unknown): void {
    this.attributes.set(key, value);
  }

  public GetAttribute(key: string): unknown {
    return this.attributes.get(key);
  }
}