import { IRecord } from "@core/Domain/Record/IRecord";
import { Record } from "@core/Domain/Record/Record";
import { RecordStatus } from "@core/Domain/Record/RecordStatus";
import { Task } from "@core/Domain/Task/Task";

export class ViewRecord implements IRecord {
  private record: Record;

  public constructor(record: Record) {
    this.record = record;
  }

  public get Record(): Record {
    return this.record;
  }

  public get Commentary(): string { return this.record.Commentary; }

  public get RegistrationDate(): Date { return this.record.RegistrationDate; }

  public get Task(): Task { return this.record.Task; }

  public get IsDone(): boolean { return this.record.IsDone; }

  public get ColoredStatusCircle(): string {
    let circle = "⚫"; // Default circle
  
    // Format dates as 'YYYY-MM-DD' for comparison
    const todayStr = new Date().toISOString().split("T")[0];
    const registrationDateStr = this.record.RegistrationDate.toISOString().split("T")[0];
  
    if (this.record.Status === RecordStatus.TO_DO) {
      circle = (registrationDateStr === todayStr) ? "🟡" : "🔵";
    } else if (this.record.Status === RecordStatus.DONE) {
      circle = "🟢";
    } else if (this.record.Status === RecordStatus.NOT_DONE) {
      circle = "🟠";
    }
  
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
    const today: Date = new Date();
    const recordDate: Date = new Date(this.record.RegistrationDate);
  
    today.setHours(0, 0, 0, 0);
    recordDate.setHours(0, 0, 0, 0);
    
    const timestamp = recordDate.getTime() - today.getTime();
    const daysDifference = Math.floor(timestamp / (1000 * 60 * 60 * 24));
  
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