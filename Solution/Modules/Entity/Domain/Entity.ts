import { IEntity } from "./IEntity";

/**
 * Represents an entity with a unique identifier.
 */
export class Entity implements IEntity {
  private identifier: string;

  public constructor(identifier: string) {
    this.identifier = identifier;
  }

  public get Identifier(): string { return this.identifier; }
}