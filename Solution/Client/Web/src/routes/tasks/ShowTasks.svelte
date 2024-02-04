<script lang="ts">
  import { ViewTask } from "./ViewTask";

  export let viewTasks: Array<ViewTask>;
</script>

<div>
  {#each viewTasks as task}
    <div class="task">
      {task.Name}
    </div>
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    align-items: center;
    justify-content: center;
  }

  .task {
    margin: auto;
    width: 40%;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 1em;
    background-color: #d6ebe7;
  }
</style>