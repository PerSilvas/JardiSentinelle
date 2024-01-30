<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let imageSource: string = "";
  export let text: string;

  const dispatch = createEventDispatcher();

  function OnClick(): void {
    dispatch("click");
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="tab" on:click={OnClick}>
  {#if imageSource != ""}
    <div class="image"><img src="{imageSource}" alt="logo for {text}"></div>
  {/if}
  <div class="text">{text}</div>
</div>

<style lang="scss">
  .tab {
    padding: .8em;
    width: calc(100% - 1.6em);
    background-color: rgb(225, 232, 235);
    border-radius: 0.2em;
    transition: all 170ms ease-out;
    &:hover {
      background-color: #d1f2ff;
      cursor: pointer;
    }
  }

  .image {
    width: 1em;
    height: 1em;
  }

  .text {
    margin: auto;
    letter-spacing: 1px;
    font-size: calc(50% + .5vw);
    font-weight: 330;
  }

  img {
    width: 100%;
    height: 100%;
  }
</style>