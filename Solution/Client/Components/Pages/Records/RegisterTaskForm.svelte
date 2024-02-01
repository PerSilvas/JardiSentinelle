<script lang="ts">
	import { serviceLocator } from "@application/main";
  import { RECORD_SERVICE, type IRecordService } from "@core/Application/Record/Service/IRecordService";
	import Button from "@assets/Components/Ions/Button.svelte";
  import Box from "@assets/Components/Atoms/Box/Box.svelte";
  import Title from "@assets/Components/Ions/Title.svelte";
	import Input from "@assets/Components/Ions/Input/Input.svelte";
  import { createEventDispatcher, onMount } from "svelte";
  import { Record } from "@core/Domain/Record/Record";
  import { Task } from "@core/Domain/Task/Task";

  const dispatch = createEventDispatcher();
  let recordService: IRecordService;
  let dateInput: string;
  let taskInput: string;
  let commentaryInput: string;

  onMount(() => {
    recordService = serviceLocator.Get(RECORD_SERVICE);
  });

  async function OnRegisterButtonClick(): Promise<void> {
    try {
      let date: Date = new Date(dateInput);
      let task: Task = new Task(new Date().toString(), taskInput);

      await recordService.CreateRecord(
        date,
        task,
        commentaryInput
      )
    } catch { }
    Close();
  }

  function OnCloseButtonClick(): void {
    Close();
  }

  function Close(): void {
    dispatch("close");
  }
</script>

<Box closable={true} on:close={OnCloseButtonClick}>
  <div class="registration-form">
    <div class="title">
      <Title>Enregister une tâche</Title>
    </div>

    <p>Date de la tâche :</p>
    <Input bind:content={dateInput} placeholder={"Format : JJ/MM/AAAA"}></Input>
    
    <p>Tâche :</p>
    <Button>Choisir une tâche</Button>
    
    <p>Commentaire :</p>
    <Input bind:content={commentaryInput}></Input>

    <div class="div-button">
      <Button isPrimary={true} on:click={OnRegisterButtonClick}>Enregistrer</Button>
    </div>
  </div>
</Box>

<style>
  .registration-form {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  p {
    text-indent: .8em;
    font-size: 1.15em;
  }

  .div-button {
    width: 40%;
    margin: auto;
  }
</style>