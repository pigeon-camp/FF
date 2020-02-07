<template>
  <v-app dark>
    <nav-bar />
    <nuxt />
  </v-app>
</template>
<script>
import navBar from './navBar.vue';
export default {
  components: {
    navBar
  }
};
</script>

<style lang="scss">
@import '@/assets/main.scss';
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap&subset=korean');
</style>
