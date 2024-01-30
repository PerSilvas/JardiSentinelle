import { InMemoryEntityRepository } from "../../../../Kernel/Application/Repository/Realisations/InMemoryEntityRepository";
import { Record } from "../../../Domain/Record/Record";
import type { IRecordRepository } from "./IRecordRepository";

export class InMemoryRecordRepository extends InMemoryEntityRepository<Record> implements IRecordRepository {
  public constructor() {
    super();
  }
}