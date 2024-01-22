<script lang="ts">
  import Switch from "@assets/Components/Ions/Switch.svelte";

  let isGraphicMode: boolean;
</script>

<div>
  Affichage graphique ?
  <Switch bind:isToggled={isGraphicMode}></Switch>
</div>

{#if isGraphicMode}
  GRAPHIQUE
{:else}
  TABLEAU
{/if}

<style>
  div {
    display: flex;
    flex-direction: column;
  }
</style>