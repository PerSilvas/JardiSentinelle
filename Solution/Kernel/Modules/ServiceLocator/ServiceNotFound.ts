import { BaseError } from "../Error/BaseError";

export class ServiceNotFound extends BaseError {
  public constructor(serviceName: string) {
    super("ServiceNotFound", `Sevirce ${serviceName} not found.`);
  }
}