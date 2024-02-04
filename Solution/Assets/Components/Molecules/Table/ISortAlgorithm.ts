import { Criteria } from "./Criteria";

export interface SortAlgorithm {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Sort(array: Array<any>, criteria: Criteria): void;
}