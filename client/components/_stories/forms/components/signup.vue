<template>
  <v-form ref="authSignUp" v-model="authValid">
    <v-card class="pb-5 text-center" width="25rem">
      <v-card-subtitle class="headline blue darken-1 ">
        <span class="white--text">회원 가입</span>
      </v-card-subtitle>

      <v-card-text class="mt-5">
        <!--Email Field  -->
        <v-text-field
          v-model="userId"
          label="이메일주소"
          :rules="rules.idRule"
          autofocus
          required
          outlined
          dense
        />

        <!-- Name Field  -->
        <v-text-field
          v-model="name"
          label="성명(한글)"
          :rules="[v => !!v || 'Name is required']"
          required
          outlined
          dense
        />

        <!-- Number Field  -->
        <v-text-field label="연락처" outlined dense />

        <!--Password Field  -->
        <v-text-field
          v-model="pw1"
          label="비밀번호"
          :rules="rules.pwRule"
          :append-icon="showText ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showText ? 'text' : 'password'"
          required
          outlined
          dense
          @click:append="showText = !showText"
        />
        <v-text-field
          v-model="pw2"
          label="비밀번호 확인"
          :append-icon="confirmIcon"
          :rules="rules.confirmRule"
          type="password"
          required
          outlined
          dense
        />
        <v-btn
          width="100%"
          height="44"
          color="#1E88E5"
          :disabled="!authValid"
          @click="validate"
        >
          <span v-if="authValid" class="white--text">가입하기</span>
          <span v-else>가입하기</span>
        </v-btn>
      </v-card-text>

      <span v-if="!!authError" class="red--text">{{ authError }}</span>

      <v-card-text>
        <p>소셜 계정으로 가입</p>

        <div class="d-flex justify-space-around">
          <v-btn width="65" height="65" color="#FFF200" class="pa-0 ma-0" depressed>
            <div class="_kbtn2-img" />
          </v-btn>

          <v-btn width="65" height="65" color="#4AB748" class="pa-0 ma-0" depressed>
            <div class="_nbtn2-img" />
          </v-btn>
        </div>
      </v-card-text>

      <v-card-subtitle class="pa-0 mt-5">
        <span class="blue--text _clickable">
          이미 가입했어요
        </span>
      </v-card-subtitle>
    </v-card>
  </v-form>
</template>

<script>
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
            '아이디는 영문자로 시작하는 6~20자 영문자'
        ],
        pwRule: [
          v =>
            this.checkConfirm('pw', v) ||
            '최소 6자리와 함께 영문, 특수문자 포함해야합니다.'
        ],
        confirmRule: [v => (v && this.checkConfirm('confirm', v)) || '']
      }
    };
  },
  methods: {
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
    async validate() {}
    //   if (this.$refs.authSignUp.validate()) {
    //     this.$nextTick(() => {
    //       this.$nuxt.$loading.start();
    //     });
    //     const context = {
    //       userId: this.userId,
    //       password: this.pw2,
    //       name: this.name
    //     };
    //     await this.$store.dispatch('auth/signUp', context).catch(e => {
    //       this.authError = e.message;
    //     });
    //     this.$nuxt.$loading.finish();
    //   }
    // }
  }
};
</script>
