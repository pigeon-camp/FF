<template>
  <client-only>
    <auth-provider :activate="activate" />
  </client-only>
</template>

<script>
import authProvider from '@/components/authProvider/';

export default {
  middleware: 'notAuthenticated',
  components: {
    authProvider
  },
  computed: {
    activate() {
      return this.$store.state.auth.activate;
    }
  }
};
</script>
