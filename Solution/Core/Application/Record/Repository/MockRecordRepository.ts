import { Record } from "../../../Domain/Record/Record";
import { Task } from "../../../Domain/Task/Task";
import type { ITaskRepository } from "../../Task/Repository/ITaskRepository";
import { InMemoryRecordRepository } from "./InMemoryRecordRepository";

export class MockRecordRepository extends InMemoryRecordRepository {
  public constructor(mockTaskRepository: ITaskRepository) {
    super();

    (async() => {
      const tasks: Array<Task> = await mockTaskRepository.GetAll();
  
      for (const task of tasks) {
        const record: Record = new Record(
          task.Identifier,
          this.GetRandomDate(),
          task,
          `Record of task ${task.Identifier}. Long text to test the text area.`,
          this.GetRandomStatusAccordingToDate()
        );
        this.Save(record);
      }
    })();
  }

  private GetRandomStatusAccordingToDate(): boolean {
    const currentDate = new Date();
    const oneMonthAgo = new Date(currentDate);
    oneMonthAgo.setMonth(currentDate.getMonth() - 1);
    const twoMonthsLater = new Date(currentDate);
    twoMonthsLater.setMonth(currentDate.getMonth() + 2);
  
    const timeDifference = twoMonthsLater.getTime() - oneMonthAgo.getTime();
    const randomTime = Math.random() * timeDifference;
    const randomDate = new Date(oneMonthAgo.getTime() + randomTime);
  
    return randomDate.getTime() < currentDate.getTime();
  }
  
  private GetRandomDate(): Date {
    const currentDate = new Date();
    const oneMonthAgo = new Date(currentDate);
    oneMonthAgo.setMonth(currentDate.getMonth() - 1);
    const twoMonthsLater = new Date(currentDate);
    twoMonthsLater.setMonth(currentDate.getMonth() + 2);
  
    const timeDifference = twoMonthsLater.getTime() - oneMonthAgo.getTime();
    const randomTime = Math.random() * timeDifference;
    const randomDate = new Date(oneMonthAgo.getTime() + randomTime);
  
    return randomDate;
  }
}