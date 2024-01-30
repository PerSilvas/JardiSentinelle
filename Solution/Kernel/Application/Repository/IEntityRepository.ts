import { Entity } from "../../Domain/Entity";

export interface IEntityRepository<TEntity extends Entity> {
  GetByIdentifier(identifier: string): Promise<TEntity>;
  Save(entity: TEntity): Promise<void>;
  Delete(identifier: string): Promise<void>;
  GetAll(): Promise<Array<TEntity>>;
}