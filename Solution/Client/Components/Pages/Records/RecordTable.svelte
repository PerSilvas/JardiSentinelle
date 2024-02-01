<script lang="ts">
  import ToolTip from "@assets/Components/Atoms/ToolTip.svelte";
  import Date from "@assets/Components/Ions/Date.svelte"
  import { ViewRecord } from "./ViewRecord";
  import Table from "@assets/Components/Molecules/Table.svelte";

  export let viewRecords: Array<ViewRecord>;
</script>

<Table>
  <tr slot="header">
    <th class="column-statut">Statut</th>
    <th>Date</th>
    <th class="column-task">Tâche</th>
    <th>Commentaire</th>
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
    width: 4em;
  }
  
  .column-task {
    width: 7em;
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