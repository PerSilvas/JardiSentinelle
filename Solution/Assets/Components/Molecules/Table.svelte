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
    overflow-x: auto;
    margin-top: 0px;
    background-color: transparent;
    border: 1px solid #c1d6d2;
    @media print {
      overflow: visible !important;
    }
  }  
  
  table {
    border-collapse: separate !important;
    @media screen {
      border-collapse: collapse;
    }
    @media screen {
      border-collapse: separate;
    }
  }

  .wrapper :global(thead) {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: white !important;
    font-weight: bold;
  }

  .wrapper :global(table) {
    width: 100%;
    height: fit-content;
    table-layout: fixed;
    text-align: center;
  }
  
  .wrapper :global(tr:nth-child(odd)) {
    background-color: rgb(214, 235, 231);
  }

  .wrapper :global(tr:nth-child(even)) {
    background-color: white;
  }
  
  .wrapper :global(tr) {
    transition: all .17s ease-out;
    vertical-align: middle;
    @media print {
      page-break-inside: avoid;
    }
  }
  
  .wrapper :global(td), .wrapper :global(th) {
    border: 1px solid #c1d6d2;
    @media screen {
      padding: .7em;
    }
    @media print {
      padding: .5em;
    }
  }

  .wrapper :global(th) {
    text-transform: uppercase;
      padding: 1.1em;
  }

  .wrapper :global(td) {
    vertical-align: middle;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c3e8e1; 
  }
</style>