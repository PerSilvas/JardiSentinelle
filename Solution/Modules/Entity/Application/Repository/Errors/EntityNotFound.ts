import { BaseError } from "@kernel/Modules/Error/BaseError";

/**
 * Error thrown when no entity with the specified identifier exists.
 */
export class EntityNotFound extends BaseError {
  public constructor() {
    super("EntityNotFound", "No entity with this identifier exists");
  }
}