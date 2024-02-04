import { SortOrder } from "./SortOrder";

export class Criteria {
  private field: string;
  private order: SortOrder;

  public constructor(field: string, order: SortOrder) {
    this.field = field;
    this.order = order;
  }

  public get Field(): string { return this.field; }
  public set Field(value: string) { this.field = value; }

  public get Order(): SortOrder { return this.order; }
  public set Order(value: SortOrder) { this.order = value; }
}