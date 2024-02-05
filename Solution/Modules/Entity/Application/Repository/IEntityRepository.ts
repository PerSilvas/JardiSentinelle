import { IEntity } from "@modules/Entity/Domain/IEntity";

/**
 * Represents a repository interface for managing entities.
 */
export interface IEntityRepository {
  /**
   * Retrieves an entity by its identifier.
   * @param identifier - The identifier of the entity.
   * @returns A promise that resolves to the entity.
   */
  GetByIdentifier(identifier: string): Promise<IEntity>;

  /**
   * Saves an entity.
   * @param entity - The entity to be saved.
   * @returns A promise that resolves when the entity is saved.
   */
  Save(entity: IEntity): Promise<void>;

  /**
   * Deletes an entity by its identifier.
   * @param identifier - The identifier of the entity to be deleted.
   * @returns A promise that resolves when the entity is deleted.
   */
  Delete(identifier: string): Promise<void>;

  /**
   * Retrieves all entities.
   * @returns A promise that resolves to an array of entities.
   */
  GetAll(): Promise<Array<IEntity>>;
}