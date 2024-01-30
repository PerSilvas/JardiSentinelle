import { EntityAlreadyExists } from "../EntityAlreadyExists";
import { EntityNotFound } from "../EntityNotFound";
import { IEntityRepository } from "../IEntityRepository";
import { Entity } from "../../../Domain/Entity";

export class InMemoryEntityRepository<TEntity extends Entity> implements IEntityRepository<TEntity>{
  private entities: Map<string, TEntity>;
  
  public constructor() {
    this.entities = new Map<string, TEntity>();
  }

  protected get Entities(): Map<string, TEntity> { return this.entities; }

  public async GetByIdentifier(identifier: string): Promise<TEntity> {
    if (!this.entities.has(identifier))
      throw new EntityNotFound();

    return this.entities.get(identifier)!;
  }

  public async Save(entity: TEntity): Promise<void> {
    if (this.entities.has(entity.Identifier))
      throw new EntityAlreadyExists();

    this.entities.set(entity.Identifier, entity);
  }

  public async Delete(identifier: string): Promise<void> {
    if (!this.entities.has(identifier))
      throw new EntityNotFound();

    this.entities.delete(identifier);
  }

  public async GetAll(): Promise<Array<TEntity>> {
    return Array.from(this.entities.values());
  }
}