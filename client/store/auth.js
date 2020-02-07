const apiUrl = '/api';

export const state = () => ({
  activate: false
});

export const mutations = {
  CHANGE_ACTIVATE(state) {
    state.activate = !state.activate;
  }
};

export const actions = {
  signUp({ commit }, userInfo) {
    return this.$axios
      .$post(`${apiUrl}/auth/signup`, userInfo)
      .then(() => {
        this.$router.go(0);
      })
      .catch(e => {
        throw new Error(e.response.data.message);
      });
  },
  signIn({ commit }, userInfo) {
    return this.$axios
      .$post(`${apiUrl}/auth/signin`, userInfo)
      .then(() => {
        this.$router.go(0);
      })
      .catch(e => {
        throw new Error(e.response.data.message);
      });
  }
};
