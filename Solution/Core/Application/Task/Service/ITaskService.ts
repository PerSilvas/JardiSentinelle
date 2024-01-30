import { Task } from "../../../Domain/Task/Task";

export const TASK_SERVICE = Symbol("TASK_SERVICE");

export interface ITaskService {
  GetAllTasks(): Promise<Array<Task>>;
}