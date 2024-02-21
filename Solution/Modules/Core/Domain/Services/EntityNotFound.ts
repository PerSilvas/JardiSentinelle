/**
 * Error thrown when an entity is not found.
 */
export class EntityNotFound extends Error {
    public constructor() {
        super("Entity not found error.");
    }
}