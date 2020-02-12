<template>
  <div class="_usercard">
    <v-card flat tile height="200" width="150" class="py-3 text-center">
      <user-header>
        <v-avatar size="80">
          <v-img src="https://picsum.photos/510/300?random" />
        </v-avatar>
      </user-header>

      <user-body class="mt-3">
        <span class="subtitle">UserId</span>
      </user-body>

      <user-footer>
        <v-btn width="80%" height="30" tile outlined>
          <span class="caption">Send Message</span>
        </v-btn>
      </user-footer>
    </v-card>
  </div>
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
