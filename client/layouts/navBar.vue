<template>
  <nav>
    <v-toolbar flat>
      <nuxt-link to="/">Home</nuxt-link>
      <span v-if="!!user">{{ user.userId }} 안녕하세요</span>
      <v-spacer />
      <nuxt-link v-if="!user" to="/account">My Account</nuxt-link>
      <nuxt-link to="/post/create">CREATE POST</nuxt-link>
      <v-btn v-if="!!user" text @click="signOut">LogOut</v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    async signOut() {
      await this.$store.dispatch('signOut');
      this.$router.path({ name: this.$router.name });
    }
  }
};
</script>
