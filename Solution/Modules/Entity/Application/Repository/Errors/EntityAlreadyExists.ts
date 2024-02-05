import { BaseError } from "@kernel/Modules/Error/BaseError";

/**
 * Error thrown when an entity with the specified identifier already exists.
 */
export class EntityAlreadyExists extends BaseError {
  public constructor() {
    super("EntityAlreadyExists", "An entity with this identifier already exists");
  }
}