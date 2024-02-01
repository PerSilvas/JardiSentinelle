<div>
  <h1 class="title">
    <slot></slot>
  </h1>
</div>

<style>
  .title {
    font-size: calc(1.8em + 1vw);
    font-weight: bold;
    color: rgb(121, 179, 121);
    text-align: center;
  }

  div {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    user-select: none;
  }
</style>