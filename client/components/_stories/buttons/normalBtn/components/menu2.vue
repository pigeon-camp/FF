<template>
  <div class="_menu2">
    <v-btn class="_menu2-button" outlined>Menu</v-btn>

    <div class="_menu2-dropdown">
      <div class="_menu2-list"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
._menu2 {
  width: 5rem;

  &-dropdown {
    position: absolute;
    width: 30rem;
    height: 0rem;
    background: #ddd;
    opacity: 0;
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &:hover {
    ._menu2-dropdown {
      height: 20rem;
      opacity: 1;
      transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    ._menu2-button {
      background: black;
      color: white;
    }
  }
}
</style>
