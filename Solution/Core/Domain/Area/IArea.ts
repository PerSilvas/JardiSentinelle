import { IEntity } from "../../../Kernel/Domain/IEntity";
import { IMapMetadata } from "./MapMetadata/IMapMetadata";

export interface IArea extends IEntity {
  get MapMetadata(): IMapMetadata;
}