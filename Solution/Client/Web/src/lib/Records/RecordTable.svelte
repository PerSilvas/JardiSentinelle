<script lang="ts">
  import { default as ViewDate } from "$lib/Components/Date.svelte";
  import Table from "$lib/Components/Table.svelte";
  import ToolTip from "$lib/Components/ToolTip.svelte";
  import { Record } from "@core/Domain/Record/Record";
  import { RecordStatus } from "@core/Domain/Record/RecordStatus";

  export let records: Array<Record>;

  function GetColorCircle(status: RecordStatus): string {
    let circle: string = "⚫";

    if (status == RecordStatus.TO_DO)
      circle = "🔵";
    else if (status == RecordStatus.DONE)
      circle = "🟢";
    else if (status == RecordStatus.NOT_DONE)
      circle = "🟠";

    return circle;
  }

  function GetToolTipText(status: RecordStatus): string {
    let text: string = "Inconnu";

    if (status == RecordStatus.TO_DO)
      text = "À faire";
    else if (status == RecordStatus.DONE)
      text = "Fait";
    else if (status == RecordStatus.NOT_DONE)
      text = "Pas fait";

    return text;
  }

  function GetDateToolTipText(date: Date): string {
    let toolTipText: string = "";
    const today: Date = new Date();

    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    
    const timestamp = date.getTime() - today.getTime();
    const daysDifference = Math.floor(timestamp / (1000 * 60 * 60 * 24));

    if (daysDifference > 0)
        toolTipText = "Dans " + daysDifference + " jour";
    else if (daysDifference < 0)
        toolTipText = "Il y a " + Math.abs(daysDifference) + " jour";
    else
        toolTipText = "Aujourd'hui";

    if (daysDifference > 1 || daysDifference < -1)
        toolTipText += "s";

    return toolTipText;
  }
</script>

<Table>
  <tr slot="header">
    <th class="column-status">Status</th>
    <th>Date</th>
    <th>Tâche</th>
    <th>Commentaire</th>
  </tr>
  
  {#each records as record}
    <tr>
      <td>
        <ToolTip text="{GetToolTipText(record.Status)}">
          {GetColorCircle(record.Status)}
        </ToolTip>
      </td>
      <td>
        <ToolTip text="{GetDateToolTipText(record.RegistrationDate)}">
          <ViewDate date={record.RegistrationDate}></ViewDate>
        </ToolTip>
      </td>
      <td>{record.Task.Name}</td>
      <td>{record.Commentary}</td>
    </tr>
  {/each}
</Table>

<style lang="scss">
  .column-status {
    width: 4em;
  }
</style>