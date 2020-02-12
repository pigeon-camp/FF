<template>
  <v-container>
    {{ post.title }}
    <hr />
    WRITER: {{ post.user.userId }}
    <div />
    CREATED: {{ getRelativeTime(post.createdAt) }} //
    {{ getTime(post.createdAt) }}
    <div class="_break">
      <div>
        {{ post.content }}
        <!-- <img :src="test" /> -->
      </div>
      <!-- {{ test }} -->
    </div>
    <div v-for="(image, index) in post.images" :key="index">
      <v-img max-height="300" max-width="300" :src="getImgUrl(image)" />
    </div>

    <div>
      <v-icon>mdi-tag</v-icon>
      <v-chip color="green" label text-color="white" small>
        porta leon
      </v-chip>

      <v-chip color="green" label text-color="white" small>
        1234567891
      </v-chip>

      <v-chip color="green" label text-color="white" small>
        maximum333
      </v-chip>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      test: 'https://picsum.photos/510/300?random'
    };
  },
  computed: {
    ...mapState({
      post: state => state.post.post
    })
  },
  methods: {
    getImgUrl(img) {
      return `http://localhost:8000/image/post/${img}`;
    },
    getRelativeTime(t) {
      return this.$_moment()
        .startOf('day')
        .fromNow();
    },
    getTime(t) {
      return this.$_moment().format('YYYY.MM.DD.h:mm:ss a');
    }
  }
};
</script>
