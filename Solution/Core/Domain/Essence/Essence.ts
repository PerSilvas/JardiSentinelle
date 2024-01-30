import { Entity } from "../../../Kernel/Domain/Entity";

export class Essence extends Entity {
  private gender: string;
  private specie: string;
  private commonNames: Array<string>;
  
  public constructor(identifier: string) {
    super(identifier);
    this.commonNames = new Array<string>();
  }

  public get Gender(): string { return this.gender; }
  public set Gender(value: string) { this.gender = value; }

  public get Specie(): string { return this.specie; }
  public set Specie(value: string) { this.specie = value; }

  public get CommonNames(): Array<string> { return this.commonNames; }
  public set CommonNames(value: Array<string>) { this.commonNames = value; }
}