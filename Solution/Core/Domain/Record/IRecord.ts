import { Task } from "../Task/Task";

export interface IRecord {
  get Commentary(): string;
  get RegistrationDate(): Date;
  get Task(): Task;
  get IsDone(): boolean;
}