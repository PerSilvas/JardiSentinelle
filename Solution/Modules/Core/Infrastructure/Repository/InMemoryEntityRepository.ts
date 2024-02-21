import { Entity } from "@modules/Core/Domain/Entities/Entity";
import { EntityRepository } from "@modules/Core/Domain/Services/EntityRepository";
import { EntityNotFound } from "@modules/Core/Domain/Services/EntityNotFound";
import { Either, Failure, Success } from "simply-either-ts";

/**
 * In memory implementation of the entity repository.
 */
export class InMemoryEntityRepository<TEntity extends Entity> implements EntityRepository<TEntity> {
    private readonly entities: Array<TEntity>;

    public constructor() {
        this.entities = new Array<TEntity>();
    }

    public Add(entity: TEntity): void {
        this.entities.push(entity);
    }

    public Remove(entity: TEntity): void {
        const index = this.entities.findIndex(e => e === entity);
        if (index !== -1) {
            this.entities.splice(index, 1);
        }
    }

    public FindByIdentifier(identifier: string): Either<TEntity, EntityNotFound> {
        let result: Either<TEntity, EntityNotFound> = Failure(new EntityNotFound());

        for (const entity of this.entities) {
            if (entity.Identifier == identifier)
                result = Success(entity);
        }

        return result;
    }

    public FindAll(): TEntity[] {
        return this.entities;
    }
}