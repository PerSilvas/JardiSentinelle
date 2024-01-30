<script lang="ts">
  function RightClick(): void {
    console.log("droite");
  }

  function LeftClick(): void {
    console.log("gauche");
  }
</script>

<div>
  
</div>

<svelte:window on:contextmenu|preventDefault={RightClick} on:click={LeftClick} />