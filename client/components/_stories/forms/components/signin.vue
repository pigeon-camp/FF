<template>
  <v-form ref="authSignIn" v-model="authValid">
    <v-card class="text-center pb-5" width="25rem">
      <v-card-subtitle class="headline cyan darken-2 ">
        <span class="white--text">회원 로그인</span>
      </v-card-subtitle>

      <v-card-text class="mt-5">
        <!--Email Field  -->
        <v-text-field label="Email" autofocus outlined dense />

        <!--Password Field  -->
        <v-text-field label="Password" type="password" outlined dense />

        <!-- <span v-if="!!authError" class="red--text">{{ authError }}</span> -->
        <span>비밀번호를 잊으셨나요?</span>
        <span>이메일로 확인하기</span>
      </v-card-text>

      <v-card-text>
        <v-btn color="#1DA29A" dark width="100%" height="44">로그인</v-btn>
      </v-card-text>

      <v-card-text>
        <p>소셜 계정으로 로그인</p>

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
        <span>
          처음이신가요?
        </span>
        <span class="blue--text _clickable">
          계정 생성하기
        </span>
      </v-card-subtitle>
    </v-card>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      authValid: false
    };
  }
};
</script>

<style lang="scss">
._clickable {
  cursor: pointer;
}
</style>
