import { Entity } from "../../../Kernel/Domain/Entity";
import { ITask } from "./ITask";

export class Task extends Entity implements ITask {
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