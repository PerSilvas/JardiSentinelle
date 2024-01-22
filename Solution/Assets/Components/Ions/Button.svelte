<script lang="ts">
  import { MouseEventHandler } from 'svelte/elements';
  import UpscaleHover from '../Effects/UpscaleHover.svelte';
  import { Size } from '../Model/Size';

  /** Is this the principal call to action on the page? */
  export let isPrimary: boolean = false;
  
  /** How large should the button be? */
  export let size: Size = Size.MEDIUM;

  /** The action to call on click. */
  export let action: MouseEventHandler<HTMLButtonElement>;

  $: mode = isPrimary ? 'button-primary' : 'button-secondary';
</script>

<UpscaleHover>
  <button type="button" class="button {size} {mode}" on:click={action}>
    <slot></slot>
  </button>
</UpscaleHover>

<style lang="scss">
  @import '@styles/size.css';

  .button { 
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    padding: 0.5em 1em;
    font-weight: bold;
    border: 1px solid lightgray;
    width: 100%;
  }
  
  .button-primary {
    background-color: var(--theme-secondary-dark);
    color: var(--theme-secondary-light);
  }

  .button-secondary {
    background-color: var(--theme-primary);
    color: var(--theme-secondary-light);
  }
</style>