import type { IEntityRepository } from "../../../../Kernel/Application/Repository/IEntityRepository";
import { Task } from "../../../Domain/Task/Task";

export const TASK_REPOSITORY = Symbol("TASK_REPOSITORY");

export interface ITaskRepository extends IEntityRepository<Task> {

}