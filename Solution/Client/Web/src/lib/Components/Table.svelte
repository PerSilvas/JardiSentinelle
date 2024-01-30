<div class="wrapper">
  <table>
    <thead>
      <slot name="header"></slot>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</div>

<style lang="scss">
  .wrapper {
    overflow-x:auto;
    margin-top: 0px;
    border: 1px solid #CCC;
    background-color: transparent;
    user-select: none;
  }

  .wrapper :global(table) {
    width: 100%;
    height: fit-content;
    table-layout: fixed;
    text-align: center;
  }
  
  .wrapper :global(tr:nth-child(odd)) {
    background-color: rgb(214, 235, 231)  }

  .wrapper :global(tr:nth-child(even)) {
    background-color: white;
  }

  .wrapper :global(tr) {
    transition: all .17s ease-out;
    vertical-align: middle;
    &:hover {
      background-color: #f3dbd1; 
      filter: brightness(105%);
    }
  }

  .wrapper thead {
    border-bottom: 1px solid #c1d6d2;
    font-weight: bold;
  }

  .wrapper :global(th) {
    padding: 1em;
    text-transform: uppercase;
    border-right: 1px solid #c1d6d2;
    border-left: 1px solid #c1d6d2;
  }

  .wrapper :global(td) {
    padding: .9em;
    border-right: 1px solid #c1d6d2;
    border-left: 1px solid #c1d6d2;
    vertical-align: middle;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c3e8e1; 
  }
</style>