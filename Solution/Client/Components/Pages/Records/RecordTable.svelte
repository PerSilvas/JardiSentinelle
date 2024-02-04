<script lang="ts">
	import { onMount } from "svelte";
  import ToolTip from "@assets/Components/Atoms/ToolTip.svelte";
  import Date from "@assets/Components/Ions/Date.svelte"
  import { ViewRecord } from "./ViewRecord";
  import Table from "@assets/Components/Molecules/Table/Table.svelte";
  import { Criteria } from "@assets/Components/Molecules/Table/Criteria";
  import { SortOrder } from "@assets/Components/Molecules/Table/SortOrder";

  export let viewRecords: Array<ViewRecord>;
  let criteria: Criteria = new Criteria("RegistrationDate", SortOrder.ASCENDING);

  onMount(() => {
    criteria = new Criteria("RegistrationDate", SortOrder.ASCENDING);
  });

  function UpdateRecord(): void {
    viewRecords = viewRecords;
  }
</script>

<Table bind:records={viewRecords} bind:criteria={criteria} on:sorted={ UpdateRecord }>
  <tr slot="header">
    <th class="column-statut">Statut</th>
    <th>Date</th>
    <th class="column-task">Tâche</th>
    <th>Commentaire</th>
    <th class="column-is-done">Fait</th>
  </tr>
  
  {#each viewRecords as viewRecord}
    <tr>
      <td class="no-user-select">
        <ToolTip text="{viewRecord.StatusToolTipText}">
          {viewRecord.ColoredStatusCircle}
        </ToolTip>
      </td>
      <td>
        <ToolTip text="{viewRecord.DateToolTipText}">
          <Date date={viewRecord.RegistrationDate}></Date>
        </ToolTip>
      </td>
      <td>{viewRecord.Task.Name}</td>
      <td>{viewRecord.Commentary}</td>
      <td><input type="checkbox" bind:checked={viewRecord.IsDone}/></td>
    </tr>
  {/each}
</Table>

<div class="status-legend">
  <p>🟢 Tâche finie</p>
  <p>🟡 Tâche à faire aujourd'hui</p>
  <p>🔵 Tâche à faire</p>
  <p>🔴 Tâche manquée</p>
</div>

<style lang="scss">
  .column-statut {
    width: 3.5em;
  }
  
  .column-task {
    width: 7em;
  }

  .column-is-done {
    width: 2em;
  }

  .no-user-select {
    user-select: none;
  }

  .status-legend {
    display: flex;
    justify-content: space-between;
    gap: 1em;
  }
</style>