import { Task } from "../../../Core/Domain/Task/Task";
import { ITaskRepository } from "../../../Core/Application/Task/Repository/ITaskRepository";
import { ITaskService } from "../../../Core/Application/Task/Service/ITaskService";

export class TaskService implements ITaskService {
  private repository: ITaskRepository;

  public constructor(repository: ITaskRepository) {
    this.repository = repository;
  }

  public async GetAllTasks(): Promise<Array<Task>> {
    return await this.repository.GetAll();
  }
}