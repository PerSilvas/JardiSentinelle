<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";

  export let closable: boolean = false;
  
  function OnCloseButtonClick(): void {
    dispatch("close");
  }

  const dispatch = createEventDispatcher();
</script>

<div class="container">
  {#if closable}
    <div>
      <button class="close" on:click={OnCloseButtonClick}></button>
    </div>
  {/if}
  <slot></slot>
</div>

<style lang="scss">
  .container {
    border: 2px solid #c1d6d2;
    border-radius: 0.5em;
    width: fit-content;
    height: fit-content;
    padding: 1.5em;
    padding-left: 2em;
    padding-right: 2em;
    background-color: white;
  }

  .close {
    position: absolute;
    right: 2%;
    top: 2%;
    width: 2.3em;
    height: 2.3em;
    border: none;
    border-radius: 1em;
    opacity: 0.5;
    transition: all .14s;
    &:hover {
      opacity: 1;
    }
    &:before, &:after {
      position: absolute;
      left: 1.05em;
      top: .35em;
      content: ' ';
      height: 1.5em;
      width: 0.2em;
      background-color: rgb(250, 93, 93);
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
</style>