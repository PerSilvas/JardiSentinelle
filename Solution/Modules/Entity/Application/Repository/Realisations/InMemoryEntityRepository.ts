import { EntityAlreadyExists } from "../Errors/EntityAlreadyExists";
import { EntityNotFound } from "../Errors/EntityNotFound";
import { IEntityRepository } from "../IEntityRepository";
import { IEntity } from "@modules/Entity/Domain/IEntity";

/**
 * Represents an in-memory realisation repository for managing entities.
 */
export class InMemoryEntityRepository implements IEntityRepository {
  private entities: Map<string, IEntity>;
  
  public constructor() {
    this.entities = new Map<string, IEntity>();
  }

  protected get Entities(): Map<string, IEntity> { return this.entities; }

  public async GetByIdentifier(identifier: string): Promise<IEntity> {
    if (!this.entities.has(identifier))
      throw new EntityNotFound();

    return this.entities.get(identifier)!;
  }

  public async Save(entity: IEntity): Promise<void> {
    if (this.entities.has(entity.Identifier))
      throw new EntityAlreadyExists();

    this.entities.set(entity.Identifier, entity);
  }

  public async Delete(identifier: string): Promise<void> {
    if (!this.entities.has(identifier))
      throw new EntityNotFound();

    this.entities.delete(identifier);
  }

  public async GetAll(): Promise<Array<IEntity>> {
    return Array.from(this.entities.values());
  }
}