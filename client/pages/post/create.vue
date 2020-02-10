<template>
  <post-create />
</template>

<script>
import postCreate from '@/components/postProvider/postComponents/postCreate.vue';
export default {
  // middleware: 'authenticated',
  components: {
    postCreate
  }
};
</script>
