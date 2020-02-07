<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: mapState({
    user: state => state.user
  })
};
</script>
