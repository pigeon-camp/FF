<template>
  <div class="box1"></div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.box1 {
  width: 47rem;
  height: 27.5rem;
  box-shadow: 3px 2px 10px -1px rgba(0, 0, 0, 0.3);
  &::before {
    content: '';
    display: block;
    width: 3rem;
    height: 3rem;
    background: red;
    position: relative;
    top: -3rem;
    left: 6rem;
  }
}
</style>
