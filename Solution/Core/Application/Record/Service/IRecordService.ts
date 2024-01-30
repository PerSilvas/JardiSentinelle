import { Record } from "../../../Domain/Record/Record";
import { Task } from "../../../Domain/Task/Task";

export const RECORD_SERVICE = Symbol("RECORD_SERVICE");

export interface IRecordService {
  GetAllRecords(): Promise<Array<Record>>;
  CreateRecord(registrationDate: Date, task: Task, commentary: string): Promise<void>;
}