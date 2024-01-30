export abstract class BaseError extends Error {
  private type: string;

  public constructor(type: string, message: string) {
    super(message);
    this.type = type;
  }

  public get Type(): string { return this.type; }
  public get Message(): string { return this.message; }
}