<script lang="ts">
  import { onMount } from 'svelte';
  import { FormEventHandler } from 'svelte/elements';
  import { IViewInput } from "./IViewInput";

  /** The actual input value. */
  export let content: string = "";

  /** Does it contains the password? */
  export let isPassword: boolean = false;
  
  /** Placeholder text for the input */
  export let placeholder: string = "";

  /** The action to call on input. */
  export let action: FormEventHandler<HTMLInputElement> | undefined = undefined;

  let borderColor: string = "default-border";
  $: type = isPassword ? 'password' : 'text';
  let informationMessage: string | undefined;

  export const view: IViewInput = {
    ShowGreenBorder: function (): void {
      borderColor = "green-border";
    },
    ShowRedBorder: function (): void {
      borderColor = "red-border";
    },
    HideInformationNotice: function (): void {
      informationMessage = undefined;
    },
    ShowInformationNotice: function (message: string): void {
      informationMessage = message;
    }
  };

  onMount(() => {
    if (!action)
      action = () => { };
  });
</script>

<div>
  {#if isPassword}
    <input type="password" bind:value={content} class="{borderColor} input" placeholder="{placeholder}" on:input={action} />
  {:else}
    <input type="text" bind:value={content} class="{borderColor} input" placeholder="{placeholder}" on:input={action} />
  {/if}
  <div class="information-message">
    {#if informationMessage}
      {informationMessage}
    {/if}
  </div>
</div>

<style lang="scss">
  .input {
    border-radius: 3em;
    padding: 0.5em 1em;
    display: inline-block;
    font-weight: bold;
    outline: none;
    transition: border-color 0.3s;
    background-color: transparent;
    width: calc(100% - 2em);
  }

  .information-message {
    text-align: right;
    font-size: 0.8em;
    margin-top: .5em;
    color: lightgray;
  }

  .default-border {
    border: .13em solid lightgray;
  }

  .green-border {
    border: .13em solid var(--success);
  }

  .red-border {
    border: .13em solid var(--error);
  }
</style>