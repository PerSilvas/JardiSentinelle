<script lang="ts">
	import FormDisplayer from "@assets/Components/Ions/FormDisplayer.svelte";
  import Title from "$lib/Components/Title.svelte";
  import { serviceLocator } from "@application/main";
  import { type IRecordService, RECORD_SERVICE } from "@core/Application/Record/Service/IRecordService";
  import { Record } from "@core/Domain/Record/Record";
  import { onMount } from "svelte";
  import RegisterTaskForm from "$lib/Records/RegisterTaskForm.svelte";
  import Button from "@assets/Components/Ions/Button.svelte";
  import RecordTable from "$lib/Records/RecordTable.svelte";

  let records: Array<Record> = new Array<Record>();
  let showRegistrationForm: boolean = false;

  function OnRegisterTaskButtonClick(): void {
    showRegistrationForm = true;
  }

  function OnCloseTaskRegistrationForm(): void {
    showRegistrationForm = false;
  }

  onMount(async() => {
    const recordService: IRecordService = serviceLocator.Get(RECORD_SERVICE);
    records = await recordService.GetAllRecords();
  });
</script>

<div class="container">
  <Title>Historique des tâches</Title>
  
  <div class="menu-action">
    <Button isPrimary>
      <p on:click={OnRegisterTaskButtonClick}>Enregistrer une tâche</p>
    </Button>
  </div>

  <RecordTable bind:records={records}></RecordTable>
  
  {#if showRegistrationForm}
    <FormDisplayer>
      <RegisterTaskForm on:close={OnCloseTaskRegistrationForm}></RegisterTaskForm>
    </FormDisplayer>
  {/if}
</div>

<style lang="scss">
  .menu-action {
    width: fit-content;
  }

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2em;
    max-width: 50em;
    height: 100%;
    max-height: 100vh;
    margin: auto;
    padding: 2em;
    box-sizing: border-box; 
  }
</style>