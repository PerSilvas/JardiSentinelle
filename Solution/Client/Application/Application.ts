import { BaseApplication } from "../../Kernel/Application/BaseApplication";
import type { IPublisher } from "../../Kernel/Modules/Publisher/IPublisher";

export const APPLICATION = Symbol("APPLICATION");

export class Application extends BaseApplication {
  public constructor(publisher: IPublisher) {
    super(publisher);
  }
  
  public Initialise(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  public StartUp(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  public ShutDown(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}