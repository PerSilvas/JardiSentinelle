<script lang="ts">
  /** Is the switch on? */
  export let isToggled: boolean = false;
</script>
  
<label class="switch dark">
  <input type="checkbox" bind:checked={isToggled}>
  <span class="slider round"></span>
</label>

<style lang="scss">
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 4em;
    height: 2.12em;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    -webkit-transition: 4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.5em;
    width: 1.5em;
    left: 4px;
    bottom: 0.2em;
    background-color: var(--theme-secondary-light)  ;
    box-shadow: 0 0 .4em gray;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: var(--theme-secondary-dark);
    box-shadow: 0 0 .4em lightgray;
  }

  input + .slider {
    border: 2px solid lightgray;
  }

  input:hover + .slider {
    box-shadow: 0 0 .4em lightgray;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(1.7em);
    -ms-transform: translateX(1.7em);
    transform: translateX(1.7em);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 1em;
    box-shadow: 0 0 .4em lightgray;
  }

  .slider.round:before {
    border-radius: 50%;
    box-shadow: 0 0 .4em gray;
  }
</style>