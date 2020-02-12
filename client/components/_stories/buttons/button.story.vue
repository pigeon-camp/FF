<template>
  <div class="markdown-body pa-5">
    <h1>Button 1 : kakao</h1>
    <div v-html="highlighting(srDocs.kakao1)" />
    <v-btn width="300" height="50" class="_kbtn1" color="#FFF200">
      <v-row>
        <v-col cols="3" class="pa-0 _center">
          <div class="_kbtn1-img" />
        </v-col>
        <v-col cols="8" class="pa-0 _center">
          <span class="subtitle-1">카카오 로그인</span>
        </v-col>
      </v-row>
    </v-btn>

    <h1>Button 2 : kakao</h1>
    <div v-html="highlighting(srDocs.kakao2)" />
    <v-btn width="65" height="65" color="#FFF200" class="pa-0 ma-0" depressed>
      <div class="_kbtn2-img" />
    </v-btn>
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

<style lang="scss">
._kbtn1 {
  &-img {
    width: 41px;
    height: 41px;
    background: url('./Elements/kakao.svg');
  }
  ._center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

._kbtn2-img {
  width: 52px;
  height: 48px;
  background: url('./Elements/kakaofont.svg');
  background-size: cover;
}
</style>
