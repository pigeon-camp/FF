<template>
  <div>
    <input type="checkbox" class="_menu1-switch" style="display: none" />
    <v-btn class="_menu1-button" outlined @click="toggle">Menu</v-btn>

    <div class="_menu1-dropdown">
      <div class="_menu1-list"></div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  data() {
    return {
      show: false,
      h: 0
    };
  },
  methods: {
    toggle(e) {
      document.querySelector('._menu1-switch').click();
    }
  }
};
</script>

<style lang="scss">
._menu1-dropdown {
  position: absolute;
  width: 30rem;
  height: 0rem;
  background: #eee;
  opacity: 0;
  transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
}

._menu1-switch:checked {
  ~ ._menu1-dropdown {
    height: 20rem;
    opacity: 1;
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  ~ ._menu1-button {
    background: black;
    color: white;
  }
}
</style>
