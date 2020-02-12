<template>
  <div class="markdown-body pa-5">
    <h1>Card 1 : intro</h1>
    <div v-html="highlighting(srDocs.intro1)" />
    <card-intro />
  </div>
</template>

<script>
import readme from './README.md';
import cardIntro from './components/cardIntro.vue';

export default {
  components: {
    cardIntro
  },
  async created() {
    await this.srDocsRun(readme);
  }
};
</script>

<style lang="scss">
</style>
