<script lang="ts">
  import Page from "@assets/Components/Ions/Page.svelte";
  import Title from "@assets/Components/Ions/Title.svelte";
  import { ViewTask } from "./ViewTask";
  import { type ITaskService, TASK_SERVICE } from "@core/Application/Task/Service/ITaskService";
  import { serviceLocator } from "@application/main";
  import { onMount } from "svelte";
  import type { Task } from "@core/Domain/Task/Task";
  import PageSection from "@assets/Components/Molecules/PageSection.svelte";
  import ShowTasks from "./ShowTasks.svelte";

  let viewTasks: Array<ViewTask> = new Array<ViewTask>();

  onMount(async() => {
    const recordService: ITaskService = serviceLocator.Get(TASK_SERVICE);
    let tasks: Array<Task> = await recordService.GetAllTasks();

    for (const task of tasks)
    viewTasks.push(new ViewTask(task));
    
    viewTasks = viewTasks;
  });
</script>

<Page>
  <Title>Ensemble des tâches</Title>

  <PageSection>
    <ShowTasks viewTasks={viewTasks}></ShowTasks>
  </PageSection>
</Page>

<style>
  .task {
    width: 50%;
    margin: auto;
    text-align: center;
    padding: 1em;
    border-radius: 1em;
    background-color: #d6ebe7;
  }
</style>