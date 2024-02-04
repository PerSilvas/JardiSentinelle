<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { IBoxView } from "./IBoxView";

  export let closable: boolean = false;
  
  function OnCloseButtonClick(): void {
    dispatch("close");
  }

  const dispatch = createEventDispatcher();

  let levelIndex: number = 0;
  let zIndex: string;
  $: zIndex = levelIndex.toString() + "0";

  let x: number = 0;
  let left: string;
  $: left = x.toString() + "px";

  let y: number = 0;
  let top: string;
  $: top = y.toString() + "px";

  const view: IBoxView = {
    MoveForward: function (): void
    {
      levelIndex++;
    },
    MoveBackward: function (): void
    {
      levelIndex--;
    },
    SetLevelIndex: function (index: number): void {
      levelIndex = index;
    }
  }
</script>

<div class="container --z-index: {zIndex}">
  <div class="wrapper">
    {#if closable}
      <div>
        <button class="close" on:click={OnCloseButtonClick}></button>
      </div>
    {/if}
    <slot></slot>
  </div>
</div>

<style lang="scss">
  .container {
    position: absolute;
    z-index: var(--z-index);
    z-index: 1;
    top: 0;
    left: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  .wrapper {
    border: 2px solid #c1d6d2;
    border-radius: 0.5em;
    width: fit-content;
    height: fit-content;
    padding: 1.5em;
    padding-left: 2em;
    padding-right: 2em;
    background-color: white;
    margin: auto;
  }

  .close {
    position: relative;
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