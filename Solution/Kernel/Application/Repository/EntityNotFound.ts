import { BaseError } from "../../Modules/Error/BaseError";

export class EntityNotFound extends BaseError {
  public constructor() {
    super("EntityNotFound", "No entity with this identifier exists");
  }
}