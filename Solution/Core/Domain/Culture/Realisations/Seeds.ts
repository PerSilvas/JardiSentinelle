import { ICulture } from "../ICulture";
import { Entity } from "../../../../Kernel/Domain/Entity";

export class Seeds extends Entity implements ICulture {
  private ascendant: ICulture;
  private descendants: Array<ICulture>;

  public constructor(
    identifier: string,
    ascendant: ICulture,
    descendants: Array<ICulture>
  ) {
    super(identifier);
    this.ascendant = ascendant;
    this.descendants = descendants;
  }
  
  public get Ascendant(): ICulture { return this.ascendant; }
  public set Ascendant(value: ICulture) { this.ascendant = value; }

  public get Descendants(): Array<ICulture> { return this.descendants; }
  public set Descendants(value: Array<ICulture>) { this.descendants = value; }
}