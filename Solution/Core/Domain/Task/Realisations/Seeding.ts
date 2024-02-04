import { Task } from "../Task";

export class Seeding extends Task {
  public constructor(identifier: string) {
    super(identifier, "Seeding");
  }
}