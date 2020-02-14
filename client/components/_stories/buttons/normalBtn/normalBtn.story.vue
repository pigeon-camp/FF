<template>
  <div class="markdown-body pa-5">
    <h1>Button 1 : menu1</h1>
    <div class="mb-3">
      Click시 dropdown 작동한다. Nav에 위치하는 버튼이기 때문에 dropdown은
      화면을 덮는다.
    </div>
    <div v-html="highlighting(srDocs.menu1)" />
    <menu1 />

    <h1>Button 2 : menu2</h1>
    <div class="mb-3">
      hover시 dropdown 작동한다. 나머지는 menu1과 동일
    </div>
    <div v-html="highlighting(srDocs.menu2)" />
    <menu2 />

    <h1>Button 3 : tab</h1>
    <div class="mb-3">
      탭 버튼이다. 일반적인 box 활용
    </div>
    <div v-html="highlighting(srDocs.menu3)" />
    <menu3 />

  </div>
</template>

<script>
import readme from './README.md';
import menu1 from './components/menu1.vue';
import menu2 from './components/menu2.vue';
import menu3 from './components/menu3.vue';

export default {
  components: {
    menu1,
    menu2,
    menu3
  },
  async created() {
    await this.srDocsRun(readme);
  }
};
</script>
