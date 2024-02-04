import type { ITask } from "@core/Domain/Task/ITask";
import type { Task } from "@core/Domain/Task/Task";

export class ViewTask implements ITask {
  private task: Task;

  public constructor(task: Task) {
    this.task = task;
  }

  public get Name() { return this.task.Name; }
}