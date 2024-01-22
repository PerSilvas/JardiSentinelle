import { BaseApplication } from "../../Core/Application/BaseApplication";
import { IPublisher } from "../../Core/Kernel/Publisher/IPublisher";

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