import { Entity } from "../../../Kernel/Domain/Entity";
import { RecordStatus } from "./RecordStatus";
import { Task } from "../Task/Task";
import { IRecord } from "./IRecord";

export class Record extends Entity implements IRecord {
  private registrationDate: Date;
  private task: Task;
  private commentary: string;
  private isDone: boolean;

  public constructor(
    identifier: string,
    registrationDate: Date,
    task: Task,  
    commentary: string,
    isDone: boolean
  ) {
    super(identifier);
    this.commentary = commentary;
    this.registrationDate = registrationDate;
    this.task = task;
    this.isDone = isDone;
  }

  public get Commentary(): string { return this.commentary; }
  public set Commentary(value: string) { this.commentary = value; }

  public get RegistrationDate(): Date { return this.registrationDate; }
  public set RegistrationDate(value: Date) { this.registrationDate = value; }

  public get Task(): Task { return this.task; }
  public set Task(value: Task) { this.task = value; }

  public get IsDone(): boolean { return this.isDone; }
  public set IsDone(value: boolean) { this.isDone = value; }

  public get TimeGap(): number {
    const today: Date = new Date();
    const recordDate: Date = new Date(this.registrationDate);

    today.setHours(0, 0, 0, 0);
    recordDate.setHours(0, 0, 0, 0);

    const timegap: number = recordDate.getTime() - today.getTime();
    return Math.floor(timegap / (1000 * 60 * 60 * 24));
  }

  public get Status(): RecordStatus {
    let status: RecordStatus = RecordStatus.UNDEFINED;
    const dateNow: Date = new Date();
      
    if (this.isDone)
      status = RecordStatus.DONE;
    else
      if (this.registrationDate.getTime() < dateNow.getTime())
        status = RecordStatus.NOT_DONE;
      else
        status = RecordStatus.TO_DO;

    return status;
  }
}