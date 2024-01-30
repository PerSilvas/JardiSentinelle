export class Category {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public get Name() { return this.name; }
}