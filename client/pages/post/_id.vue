<template>
  <post-provider type="detail" />
</template>

<script>
import postProvider from '@/components/postProvider';

export default {
  components: {
    postProvider
  },
  async fetch({ store, params }) {
    await store.dispatch('post/getPost', params.id);
  }
};
</script>
