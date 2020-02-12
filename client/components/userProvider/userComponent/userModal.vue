<template>
  <v-card flat tile width="600" class="py-5">
    <v-container fluid class="_h100">
      <v-layout column class="_h100">
        <v-flex class="_h30 text-center">
          <user-header>
            <v-avatar size="200">
              <v-img src="https://picsum.photos/510/300?random" />
            </v-avatar>
          </user-header>
        </v-flex>

        <v-flex class="_h30">
          <user-body class="mt-3">
            <span class="subtitle _break">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              posuere nibh. Ut maximus augue id pulvinar elementum. Praesent
              tincidunt, metus a dapibus molestie, purus diam sollicitudin
              metus, id rhoncus nisi ipsum vel orci. Maecenas velit massa,
              suscipit et gravida a, tincidunt in turpis. Pellentesque
              consequat, leo nec aliquam varius, lorem diam gravida justo, a
              tincidunt nisi leo vel sem. Ut porttitor bibendum libero consequat
              rhoncus. Pellentesque sit amet risus at justo luctus imperdiet sit
              amet in nibh. In iaculis nibh erat, sit amet varius magna
            </span>
          </user-body>
        </v-flex>

        <v-flex class="_h40 text-right">
          <user-footer class="_h100">
            <v-textarea height="220" outlined />
            <v-btn width="120" height="38" class="indigo">
              <span class="caption">Send</span>
            </v-btn>
          </user-footer>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import userHeader from './userElement/userHeader.vue';
import userBody from './userElement/userBody.vue';
import userFooter from './userElement/userFooter.vue';

export default {
  components: {
    userHeader,
    userBody,
    userFooter
  }
};
</script>
