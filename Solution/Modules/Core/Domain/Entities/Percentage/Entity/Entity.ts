/**
 * Represents an entity with a unique identifier.
 */
export class Entity {
    private readonly identifier: string;

    public constructor(identifier: string) {
        this.identifier = identifier;
    }

    public get Identifier(): string { return this.identifier; }
}