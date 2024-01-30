export class Entity {
  private identifier: string;

  public constructor(identifier: string) {
    this.identifier = identifier;
  }

  public get Identifier(): string {
    return this.identifier;
  }
}