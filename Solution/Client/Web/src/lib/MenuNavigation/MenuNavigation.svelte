<script lang="ts">
  import { goto } from "$app/navigation";
  import Title from "@assets/Components/Ions/Title.svelte";
  import { createEventDispatcher } from "svelte";
  import Tab from "./Tab.svelte";

  const dispatch = createEventDispatcher();

  function OnDashboardTabClick(): void { goto("/dashboard"); }
  function OnCultureTabClick(): void { goto("/plantations"); }
  function OnMapTabClick(): void { goto("/mapping"); }
  function OnRecordsTabClick(): void { goto("/recordings"); }
  function OnTasksTabClick(): void { goto("/tasks"); }
  function OnEncyclopediaTabClick(): void { goto("/encyclopedia"); }
</script>

<menu class="wrapper prevent-select">
  <Title>JardiSentinelle</Title>
  <div class="tabs">
    <Tab imageSource={""} text={"📶 Tableau de bord"} on:click={ OnDashboardTabClick }></Tab>
    <Tab imageSource={""} text={"🌾 Plantation"} on:click={ OnCultureTabClick }></Tab>
    <Tab imageSource={""} text={"🗺️ Cartographie"} on:click={ OnMapTabClick }></Tab>
    <Tab imageSource={""} text={"📜 Enregistrements"} on:click={ OnRecordsTabClick }></Tab>
    <Tab imageSource={""} text={"🎯 Tâches"} on:click={ OnTasksTabClick }></Tab>
    <Tab imageSource={""} text={"📖 Encyclopédie"} on:click={ OnEncyclopediaTabClick }></Tab>
  </div>
</menu>

<style>
  .prevent-select {
    user-select: none;
  }

  .wrapper {
    border-right: 2px solid rgb(145, 172, 187);
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 2.5em;
    padding: 2em;
    box-sizing: border-box; 
  }
  
  .tabs {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.21em;
    gap: 1.2em;
  }
</style>