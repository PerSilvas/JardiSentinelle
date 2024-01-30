import { Entity } from "../../../../Kernel/Domain/Entity";
import { IArea } from "../../Area/IArea";
import { IMapMetadata } from "../../Area/MapMetadata/IMapMetadata";
import { Essence } from "../../Essence/Essence";
import { ICulture } from "../ICulture";

export class Culture extends Entity implements IArea, ICulture {
  private mapMedatada: IMapMetadata;
  private essence: Essence;
  private ascendant: ICulture;
  private descendants: Array<ICulture>;

  public constructor(
    identifier: string,
    mapMedatada: IMapMetadata,
    essence: Essence,
    ascendant: ICulture,
    descendants: Array<ICulture>
  ) {
    super(identifier);
    this.mapMedatada = mapMedatada;
    this.essence = essence;
    this.ascendant = ascendant;
    this.descendants = descendants;
  }

  public get MapMetadata(): IMapMetadata { return this.mapMedatada; }
  public set MapMetadata(value: IMapMetadata) { this.mapMedatada = value; }

  public get Essence(): Essence { return this.essence; }
  public set Essence(value: Essence) { this.essence = value; }

  public get Ascendant(): ICulture { return this.ascendant; }
  public set Ascendant(value: ICulture) { this.ascendant = value; }

  public get Descendants(): Array<ICulture> { return this.descendants; }
  public set Descendants(value: Array<ICulture>) { this.descendants = value; }
}