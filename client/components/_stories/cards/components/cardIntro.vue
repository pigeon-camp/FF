<template>
  <v-card
    color="#d0e4f2"
    class="_icard"
    width="18rem"
    height="30rem"
    tile
    outlined
  >
    <div class="_icard-header">
      <v-card-title class="_icard-header-title justify-center">
        <span class="title white--text">TITLE TITLE TITLE</span>
      </v-card-title>
    </div>

    <v-card-text class="_icard-body-1">
      <p class="mb-0">TEXT</p>
    </v-card-text>

    <div class="_icard-body-2">
      <v-list dense disabled class="blue-grey lighten-2">
        <v-list-item v-for="n in 4" :key="n">
          <v-list-item-icon class="mr-1">
            <v-icon v-text="test_icon" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="test_list" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>

    <v-card-actions class="_icard-footer justify-center">
      <v-btn width="90%" color="orange" outlined rounded>
        Contribute
      </v-btn>
    </v-card-actions>
  </v-card>
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
$h-icard-b-1: 7.5rem;
$h-icard-b-2: 13rem;
$h-icard-t: 4rem;
$h-icard: 30rem;

._icard {
  border-radius: 0.8rem;
  &-header {
    &-title {
      height: $h-icard-t;
      background-color: #2e3949;
      border-radius: 0.8rem 0.8rem 0 0;
    }
  }

  &-body {
    &-1 {
      background-color: #bbbbbb;
      height: $h-icard-b-1;
    }
    &-2 {
      background-color: #90a4ae;
      height: $h-icard-b-2;
    }
  }

  &-footer {
    height: $h-icard - ($h-icard-b-1 + $h-icard-b-2 + $h-icard-t);
  }
}
</style>
