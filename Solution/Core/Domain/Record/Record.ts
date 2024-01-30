import { Entity } from "../../../Kernel/Domain/Entity";
import { RecordStatus } from "./RecordStatus";
import { Task } from "../Task/Task";

export class Record extends Entity {
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

  public get Status(): RecordStatus {
    let status: RecordStatus = RecordStatus.UNDEFINED;
    const dateNow: Date = new Date();

    if (dateNow.getTime() > this.registrationDate.getTime())
      if (this.isDone)
        status = RecordStatus.DONE;
      else
        status = RecordStatus.NOT_DONE;
    else
      status = RecordStatus.TO_DO;

    return status;
  }
}