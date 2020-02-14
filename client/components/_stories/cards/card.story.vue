<template>
  <div class="markdown-body pa-5">
    <h1>Card 1 : intro</h1>
    <div v-html="highlighting(srDocs.intro1)" />
    <card-intro />

    <h1>Card 2 : box1</h1>
    <div v-html="highlighting(srDocs.box1)" />
    <card-box1 />
  </div>
</template>

<script>
import readme from './README.md';
import cardIntro from './components/cardIntro.vue';
import cardBox1 from './components/cardBox1.vue';

export default {
  components: {
    cardIntro,
    cardBox1
  },
  async created() {
    await this.srDocsRun(readme);
  }
};
</script>

<style lang="scss"></style>
