import { TypeOfMap } from "./TypeOfMap";

export interface IMapMetadata {
  get TypeOfMap(): TypeOfMap;
  get Metadata(): string;
}