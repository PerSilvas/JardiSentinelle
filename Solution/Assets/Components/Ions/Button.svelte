<script lang="ts">
	import { createEventDispatcher } from 'svelte';

  /** Is this the principal call to action on the page? */
  export let isPrimary: boolean = false;

  $: mode = isPrimary ? 'button-primary' : 'button-secondary';
  
	const dispatch = createEventDispatcher();
</script>

<button type="button" class="button {mode}" on:click={() => { dispatch("click") }}>
  <slot></slot>
</button>

<style lang="scss">
  .button { 
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    padding: 0.5em 1em;
    font-weight: bold;
    border: .13em solid lightgray;
    width: 100%;
  }
  
  .button-primary {
    font-size: 1.1em;
    background-color: #304253;
    color: white;
  }

  .button-secondary {
    background-color: transparent;
  }
</style>