<div>
  <slot></slot>
</div>

<style lang="scss">
  div {
    position: absolute;
    left: 50%;
    top: 50%;
    width: fit-content;
    transform: translateX(-50%) translateY(-50%);
  }
</style>