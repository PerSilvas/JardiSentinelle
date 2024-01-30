import { Entity } from "../../../Kernel/Domain/Entity";

export class Task extends Entity {
  private name: string;

  public constructor(
    identifier: string,
    name: string,
  ) {
    super(identifier);
    this.name = name;
  }

  public get Name() { return this.name; }
}