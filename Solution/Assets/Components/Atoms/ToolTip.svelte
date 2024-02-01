<script lang="ts">
  export let text: string;
</script>

<div class="container">
  <div class="trigger">
    <slot></slot>
  </div>
  <div class="tooltip">
    <span class="tooltiptext">{text}</span>
  </div>
</div>

<style lang="scss">
  .container {
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .trigger {
    width: fit-content;
  }

  .tooltip {
    position: absolute;
    visibility: hidden;
    background: white;
    border: 2px solid rgb(152, 177, 167);
    transform: translateY(-120%);
    padding: 1em;
    padding-top: .4em;
    padding-bottom: .4em;
    border-radius: 1em;
    white-space: nowrap;
    margin: auto;
    margin-bottom: .3em;
    opacity: 0;
    transition: all 150ms ease-out;
    z-index: 1;
  }

  
  @media not print {
    .container:hover .tooltip {
      visibility: visible;
      opacity: 1;
    }
  }
</style>