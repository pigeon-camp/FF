<template>
  <!-- <div class="_icard">
    <div class="_icard-header">
      <span class="headline cyan--text text--lighten-5">TITLE</span>
    </div>

    <div class="_icard-body pa-3">
      <div class="_icard-body-top">
        I'am main
      </div>
      <div class="_icard-body-bottom">
        I'am List
        <v-list dense disabled class="blue-grey lighten-2">
          <v-list-item v-for="n in 4" :key="n" class="pa-0 ma-0">
            <v-list-item-icon class="mr-1">
              <v-icon v-text="test_icon" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="test_list" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </div>

    <div class="_icard-footer mx-3 ">
      <v-btn width="95%" color="orange" outlined rounded>
        Contribute
      </v-btn>
    </div>
  </div> -->
  <v-layout>
    <v-flex>
      
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      test_icon: 'mdi-check',
      test_list: 'Nam rhoncus auctor nibh non nibh'
    };
  }
};
</script>

<style lang="scss">
._icard {
  background-color: #f5f8fa;
  width: 300px;
  height: 500px;
  border-radius: 10px;
  &-header {
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2e3949;
    width: 100%;
    height: 65px;
  }

  &-body {
    &-top {
      background-color: #bbbbbb;
      height: 120px;
    }
    &-bottom {
      background-color: #90a4ae;
      height: 200px;
    }
  }

  &-footer {
    height: 80px;
    background-color: #2e3949;
  }
}
</style>
