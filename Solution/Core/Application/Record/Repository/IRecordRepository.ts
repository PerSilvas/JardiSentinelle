import type { IEntityRepository } from "../../../../Kernel/Application/Repository/IEntityRepository";
import { Record } from "../../../Domain/Record/Record";

export const RECORD_REPOSITORY = Symbol("RECORD_REPOSITORY");

export interface IRecordRepository extends IEntityRepository<Record> {

}