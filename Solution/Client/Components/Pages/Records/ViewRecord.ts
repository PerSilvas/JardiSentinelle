import { IRecord } from "@core/Domain/Record/IRecord";
import { Record } from "@core/Domain/Record/Record";
import { RecordStatus } from "@core/Domain/Record/RecordStatus";
import { Task } from "@core/Domain/Task/Task";

export class ViewRecord implements IRecord {
  private record: Record;

  public constructor(record: Record) {
    this.record = record;
  }

  public get Commentary(): string { return this.record.Commentary; }

  public get RegistrationDate(): Date { return this.record.RegistrationDate; }

  public get Task(): Task { return this.record.Task; }

  public get IsDone(): boolean { return this.record.IsDone; }
  public set IsDone(value: boolean) { this.record.IsDone = value; }
  
  public get TimeGap(): number { return this.record.TimeGap; }

  public get ColoredStatusCircle(): string {
    let circle = "⚫";
  
    const todayStr = new Date().toISOString().split("T")[0];
    const registrationDateStr = this.record.RegistrationDate.toISOString().split("T")[0];
  
    if (this.record.Status === RecordStatus.TO_DO) {
      if (registrationDateStr === todayStr)
        circle = "🟡";
      else
        circle = "🔵";
    } else if (this.record.Status === RecordStatus.NOT_DONE) {
      circle = "🟠";
    }

    if (this.record.Status === RecordStatus.DONE)
      circle = "🟢";
  
    return circle;
  }

  public get StatusToolTipText(): string {
    let text: string = "Inconnu";
  
    if (this.record.Status == RecordStatus.TO_DO)
      text = "À faire";
    else if (this.record.Status == RecordStatus.DONE)
      text = "Fait";
    else if (this.record.Status == RecordStatus.NOT_DONE)
      text = "Manqué";
  
    return text;
  }

  public get DateToolTipText(): string {
    let toolTipText: string = "";
    const daysDifference = this.record.TimeGap;
  
    if (daysDifference > 0)
      toolTipText = "Dans " + daysDifference + " jour";
    else if (daysDifference < 0)
      toolTipText = "Il y a " + Math.abs(daysDifference) + " jour";
    else
      toolTipText = "Aujourd'hui";
  
    if (daysDifference > 1 || daysDifference < -1)
      toolTipText += "s";
  
    return toolTipText;
  }
}