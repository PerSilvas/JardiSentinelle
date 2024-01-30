import { InMemoryEntityRepository } from "../../../../Kernel/Application/Repository/Realisations/InMemoryEntityRepository";
import type { ITaskRepository } from "./ITaskRepository";
import { Task } from "../../../Domain/Task/Task";

export class InMemoryTaskRepository extends InMemoryEntityRepository<Task> implements ITaskRepository {

}