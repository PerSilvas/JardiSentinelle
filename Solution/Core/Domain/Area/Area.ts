import { Entity } from "../../../Kernel/Domain/Entity";
import { IArea } from "./IArea";
import { IMapMetadata } from "./MapMetadata/IMapMetadata";

export class Area extends Entity implements IArea {
  private mapMedatada: IMapMetadata;
  private subareas: Map<string, IArea>;

  public constructor(
    identifier: string,
    mapMedatada: IMapMetadata
  ) {
    super(identifier);
    this.mapMedatada = mapMedatada;
    this.subareas = new Map<string, IArea>();
  }

  public get MapMetadata(): IMapMetadata { return this.mapMedatada; }
  public get Subareas(): Map<string, IArea> { return this.subareas; }

  public AddSubarea(subarea: IArea): void {
    this.subareas.set(subarea.Identifier, subarea);
  }

  public RemoveSubarea(subarea: IArea): void {
    this.subareas.delete(subarea.Identifier);
  }

  public GetSubarea(identifier: string): IArea {
    return this.subareas[identifier];
  }
}