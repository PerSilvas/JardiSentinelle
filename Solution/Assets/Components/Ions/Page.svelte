<div class="container">
  <slot></slot>
</div>

<style>
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2em;
    max-width: 50em;
    height: 100%;
    max-height: 100vh;
    margin: auto;
    padding: 2em;
    box-sizing: border-box; 
  }

  @media print {
    .container {
      padding: 0mm;
    }
  }
</style>