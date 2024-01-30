import { Record } from "../../../Core/Domain/Record/Record";
import { IRecordRepository } from "../../../Core/Application/Record/Repository/IRecordRepository";
import { IRecordService } from "../../../Core/Application/Record/Service/IRecordService";
import { Task } from "../../../Core/Domain/Task/Task";

export class RecordService implements IRecordService {
  private repository: IRecordRepository;

  public constructor(repository: IRecordRepository) {
    this.repository = repository;
  }

  public async GetAllRecords(): Promise<Array<Record>> {
    return await this.repository.GetAll();
  }

  public async CreateRecord(registrationDate: Date, task: Task, commentary: string): Promise<void> {
    const record: Record = new Record(registrationDate.toString(), registrationDate, task, commentary);
    await this.repository.Save(record);
  }
}