<template>
  <div class="markdown-body pa-5">
    <h1>Input 1 : ID입력</h1>
    <div v-html="highlighting(srDocs.Input1)" />
    <v-text-field type="text" label="ID" solo outlined />

    <h1>Input 2 : PW입력</h1>
    <div v-html="highlighting(srDocs.password)" />
    <v-text-field type="password" label="PW" solo outlined />
  </div>
</template>

<script>
import readme from './README.md';

export default {
  async created() {
    await this.srDocsRun(readme);
  }
};
</script>
