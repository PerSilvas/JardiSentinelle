import { Task } from "../../../Domain/Task/Task";
import { InMemoryTaskRepository } from "./InMemoryTaskRepository";

export class MockTaskRepository extends InMemoryTaskRepository {
  public constructor() {
    super();

    this.Save(new Task("0", "Task 0"));
    this.Save(new Task("1", "Task 1"));
    this.Save(new Task("2", "Task 2"));
    this.Save(new Task("3", "Task 3"));
    this.Save(new Task("4", "Task 4"));
    this.Save(new Task("5", "Task 5"));
    this.Save(new Task("6", "Task 6"));
    this.Save(new Task("7", "Task 7"));
    this.Save(new Task("8", "Task 8"));
    this.Save(new Task("9", "Task 9"));
    this.Save(new Task("10", "Task 10"));
    this.Save(new Task("90", "Task 90"));
    this.Save(new Task("91", "Task 91"));
    this.Save(new Task("92", "Task 92"));
    this.Save(new Task("93", "Task 93"));
    this.Save(new Task("94", "Task 94"));
    this.Save(new Task("95", "Task 95"));
    this.Save(new Task("96", "Task 96"));
    this.Save(new Task("97", "Task 97"));
    this.Save(new Task("98", "Task 98"));
    this.Save(new Task("99", "Task 99"));
    this.Save(new Task("901", "Task 901"));
    this.Save(new Task("902", "Task 902"));
    this.Save(new Task("903", "Task 903"));
  }
}