import { BaseError } from "../../Modules/Error/BaseError";

export class EntityAlreadyExists extends BaseError {
  public constructor() {
    super("EntityAlreadyExists", "An entity with this identifier already exists");
  }
}