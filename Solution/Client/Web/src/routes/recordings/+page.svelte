<script lang="ts">
	import RegisterTaskForm from "@components/Pages/Records/RegisterTaskForm.svelte";
	import RecordTable from "@components/Pages/Records/RecordTable.svelte";
	import FormDisplayer from "@assets/Components/Ions/FormDisplayer.svelte";
  import { serviceLocator } from "@application/main";
  import { type IRecordService, RECORD_SERVICE } from "@core/Application/Record/Service/IRecordService";
  import { Record } from "@core/Domain/Record/Record";
  import { onMount } from "svelte";
  import Button from "@assets/Components/Ions/Button.svelte";
  import Title from "@assets/Components/Ions/Title.svelte";
  import { ViewRecord } from "@components/Pages/Records/ViewRecord";
  import Page from "@assets/Components/Ions/Page.svelte";

  let viewRecords: Array<ViewRecord> = new Array<ViewRecord>();
  let showRegistrationForm: boolean = false;

  function OnRegisterTaskButtonClick(): void {
    showRegistrationForm = true;
  }

  function OnCloseTaskRegistrationForm(): void {
    showRegistrationForm = false;
  }

  onMount(async() => {
    const recordService: IRecordService = serviceLocator.Get(RECORD_SERVICE);
    let records: Array<Record> = await recordService.GetAllRecords();

    for (let i: number = 0; i < records.length; i++) {
      viewRecords.push(new ViewRecord(records[i]));
    }
    
    viewRecords = viewRecords;
  });
</script>

<Page>
  <Title>Historique des tâches</Title>
  
  <menu>
    <Button isPrimary on:click={OnRegisterTaskButtonClick}>
      Enregistrer une tâche
    </Button>
  </menu>

  <RecordTable bind:viewRecords={viewRecords}></RecordTable>
  
  {#if showRegistrationForm}
    <FormDisplayer>
      <RegisterTaskForm on:close={OnCloseTaskRegistrationForm}></RegisterTaskForm>
    </FormDisplayer>
  {/if}
</Page>

<style lang="scss">
  menu {
    width: fit-content;
  }
</style>