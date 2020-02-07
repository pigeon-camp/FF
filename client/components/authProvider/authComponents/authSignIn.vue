<template>
  <v-form ref="authSignIn" v-model="authValid">
    <v-card class="pa-5">
      <v-card-title class="headline">
        <span>Sign In</span>
      </v-card-title>

      <!--Email Field  -->
      <v-text-field v-model="userId" label="ID" autofocus outlined />

      <!--Password Field  -->
      <v-text-field v-model="pw" label="PW" type="password" outlined />

      <v-btn :disabled="!authValid" @click="validate">Submit</v-btn>
      <span v-if="!!authError" class="red--text">{{ authError }}</span>
      <v-card-subtitle class="pa-0 mt-5">
        <span class="blue--text _clickable" @click="change_activate">
          Create Account
        </span>
      </v-card-subtitle>
    </v-card>
  </v-form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data: () => ({
    authError: '',
    authValid: false,
    userId: '',
    pw: ''
  }),
  methods: {
    ...mapMutations({
      change_activate: 'auth/CHANGE_ACTIVATE'
    }),
    async validate() {
      if (this.$refs.authSignIn.validate()) {
        this.$nextTick(() => {
          this.$nuxt.$loading.start();
        });
        const context = { userId: this.userId, password: this.pw };
        await this.$store.dispatch('auth/signIn', context).catch(e => {
          this.authError = e.message;
        });
        this.$nuxt.$loading.finish();
      }
    }
  }
};
</script>
