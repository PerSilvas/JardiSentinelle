import { ServiceLocator } from "../../Kernel/Modules/ServiceLocator/ServiceLocator";
import { APPLICATION, Application } from "./Application";
import { Publisher } from "../../Kernel/Modules/Publisher/Realisations/Publisher";
import type { IPublisher } from "../../Kernel/Modules/Publisher/IPublisher";
import { ITaskService, TASK_SERVICE } from "../../Core/Application/Task/Service/ITaskService";
import { ITaskRepository, TASK_REPOSITORY } from "../../Core/Application/Task/Repository/ITaskRepository";
import { TaskService } from "./Services/TaskService";
import { MockTaskRepository } from "../../Core/Application/Task/Repository/MockTaskRepository";
import { IRecordRepository, RECORD_REPOSITORY } from "../../Core/Application/Record/Repository/IRecordRepository";
import { MockRecordRepository } from "../../Core/Application/Record/Repository/MockRecordRepository";
import { RecordService } from "./Services/RecordService";
import { IRecordService, RECORD_SERVICE } from "../../Core/Application/Record/Service/IRecordService";


export const serviceLocator: ServiceLocator = new ServiceLocator();

/* ----- Application ----- */
const publisher: IPublisher = new Publisher();
const application: Application = new Application(publisher);
serviceLocator.Register(APPLICATION, application);

/* -------- Tasks -------- */
const taskRepository: ITaskRepository = new MockTaskRepository();
const taskService: ITaskService = new TaskService(taskRepository);
serviceLocator.Register(TASK_REPOSITORY, taskRepository);
serviceLocator.Register(TASK_SERVICE, taskService);

/* ------- Records ------- */
const recordRepository: IRecordRepository = new MockRecordRepository(taskRepository);
const recordService: IRecordService = new RecordService(recordRepository);
serviceLocator.Register(RECORD_REPOSITORY, recordRepository);
serviceLocator.Register(RECORD_SERVICE, recordService);