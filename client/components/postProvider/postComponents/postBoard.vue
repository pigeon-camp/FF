<template>
  <v-card class="_postmain" color="grey darken-4">
    <div class="_postmain-left">
      <v-card-text class="_break _postTitle1">
        Praesent tincidunt, metus a dapibus varius magna Nullam egestas quis
        erat vel placerat. Integer eget sem ac risus
      </v-card-text>

      <v-card-text class="_break _postContent1">
        Pellentesque sit amet risus at justo luctus imperdiet sit amet in nibh.
        In iaculis nibh erat, sit amet varius magna Nullam egestas quis erat vel
        placerat. Integer eget sem ac risus tincidunt fringilla. Quisque eget
        felis sed lorem vestibulum finibus. Phasellus gravida odio ex, non
        faucibus dolor dapibus non. Vivamus fermentum, enim id laoreet accumsan,
        diam nisi porta leo, non cursus tortor velit et orci.
      </v-card-text>

      <v-card-text class="_postTag1">
        <v-chip color="green" label text-color="white" small>
          porta leon
        </v-chip>

        <v-chip color="green" label text-color="white" small>
          1234567891
        </v-chip>

        <v-chip color="green" label text-color="white" small>
          maximum333
        </v-chip>
      </v-card-text>
    </div>
    <div class="_postmain-right">
      <user-board />
    </div>
  </v-card>
</template>

<script>
import userBoard from '@/components/userProvider/userComponent/userBoard.vue';

export default {
  components: {
    userBoard
  }
};
</script>
