<template>
  <v-form ref="authSignUp" v-model="authValid">
    <v-card class="pa-5">
      <v-card-title class="headline">
        <span>Sign Up</span>
      </v-card-title>

      <!--Email Field  -->
      <v-text-field
        v-model="userId"
        label="ID"
        :rules="rules.idRule"
        autofocus
        required
        outlined
      />

      <!-- Name Field  -->
      <v-text-field
        v-model="name"
        label="Name"
        :rules="[v => !!v || 'Name is required']"
        required
        outlined
      />

      <!--Password Field  -->
      <v-text-field
        v-model="pw1"
        label="password"
        :rules="rules.pwRule"
        :append-icon="showText ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showText ? 'text' : 'password'"
        required
        outlined
        @click:append="showText = !showText"
      />
      <v-text-field
        v-model="pw2"
        label="Confirm Password"
        :append-icon="confirmIcon"
        :rules="rules.confirmRule"
        type="password"
        required
        outlined
      />

      <v-btn :disabled="!authValid" @click="validate">Submit</v-btn>
      <span v-if="!!authError" class="red--text">{{ authError }}</span>
      <v-card-subtitle class="pa-0 mt-5">
        <span class="blue--text _clickable" @click="change_activate">
          Login
        </span>
      </v-card-subtitle>
    </v-card>
  </v-form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      authError: '',
      authValid: false,
      userId: null,
      name: null,
      pw1: null,
      pw2: null,
      showText: false,
      confirmIcon: 'mdi-close-circle',
      rules: {
        idRule: [
          v => !!v || 'ID is required',
          v =>
            this.checkConfirm('id', v) ||
            '아이디는 영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다.'
        ],
        pwRule: [
          v =>
            this.checkConfirm('pw', v) ||
            'password must be at least 6 characters alphanumeric and contain a special character'
        ],
        confirmRule: [v => (v && this.checkConfirm('confirm', v)) || '']
      }
    };
  },
  methods: {
    ...mapMutations({
      change_activate: 'auth/CHANGE_ACTIVATE'
    }),
    checkConfirm(mode, input) {
      switch (mode) {
        case 'id':
          const regexId = /^[a-z]+[a-z0-9]{5,19}$/g;
          return regexId.test(input);

        case 'pw':
          const regexPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
          if (this.pw1 === this.pw2) {
            this.confirmIcon = 'mdi-check-circle';
          } else {
            this.confirmIcon = 'mdi-close-circle';
            this.pw2 = null;
          }
          return regexPw.test(input);

        case 'confirm':
          if (input === this.pw1) {
            this.confirmIcon = 'mdi-check-circle';
            return true;
          } else {
            this.confirmIcon = 'mdi-close-circle';
            return false;
          }
      }
    },
    async validate() {
      if (this.$refs.authSignUp.validate()) {
        this.$nextTick(() => {
          this.$nuxt.$loading.start();
        });
        const context = {
          userId: this.userId,
          password: this.pw2,
          name: this.name
        };
        await this.$store.dispatch('auth/signUp', context).catch(e => {
          this.authError = e.message;
        });
        this.$nuxt.$loading.finish();
      }
    }
  }
};
</script>
