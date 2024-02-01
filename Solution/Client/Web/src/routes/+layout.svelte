<script>
  import Menu from "$lib/MenuNavigation/MenuNavigation.svelte";
</script>

<div class="root">
  <div class="menu print-disabled">
    <Menu></Menu>
  </div>
  <div class="page">
    <slot></slot>
  </div>
</div>

<style lang="scss">
  .root {
    background-color: white;
    display: flex;
    flex-direction: row;
    max-height: 100vh;
    height: 100vh;
  }

  .menu {
    width: calc(23% + 1em);
    max-width: 22em;
    min-width: 16em;
    font-size: 1.15em;
    height: 100%;
  }

  .page {
    flex-grow: 1;
  }

  @media print {
    .root {
      overflow: visible !important;
    }
  }
</style>