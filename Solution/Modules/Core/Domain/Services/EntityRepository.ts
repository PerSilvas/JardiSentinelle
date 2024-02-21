import {Entity} from "@modules/Core/Domain/Entities/Entity";
import { EntityNotFound } from "@modules/Core/Domain/Services/EntityNotFound";
import { Either } from "simply-either-ts";

/**
 * Represents a generic repository for entities.
 */
export interface EntityRepository<TEntity extends Entity> {
    /**
     * Add the entity to the repository.
     * @param entity - the entity to add.
     */
    Add(entity: TEntity): void;

    /**
     * Remove the entity from the repository.
     * @param entity - the entity to remove.
     */
    Remove(entity: TEntity): void;

    /**
     * Find the entity according to the identifier.
     * @param identifier - the identifier of the entity.
     * @returns the entity.
     */
    FindByIdentifier(identifier: string): Either<TEntity, EntityNotFound>;

    /**
     * Find all the entities from the repository.
     * @returns an array of entity.
     */
    FindAll(): Array<TEntity>;
}