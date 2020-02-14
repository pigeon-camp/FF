<template>
  <div class="markdown-body pa-5">
    <h1>Card 1 : Login 1</h1>
    <div v-html="highlighting(srDocs.signin)" />
    <signin />

    <h1>Card 2 : Join</h1>
    <div v-html="highlighting(srDocs.signup)" />
    <signup />

  </div>
</template>

<script>
import readme from './README.md';
import signin from './components/signin.vue';
import signup from './components/signup.vue';

export default {
  components: {
    signin,
    signup
  },
  async created() {
    await this.srDocsRun(readme);
  }
};
</script>

<style lang="scss"></style>
