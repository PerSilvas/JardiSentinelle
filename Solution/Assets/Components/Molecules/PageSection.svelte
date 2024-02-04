<section>
  <slot></slot>
</section>

<style>
  section {
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 2em;
  }
  
  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c3e8e1; 
  }
</style>