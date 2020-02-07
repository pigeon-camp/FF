const apiUrl = '/api';

export const state = () => ({
  user: null
});

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  INIT_USER(state) {
    state.user = null;
  }
};

export const actions = {
  nuxtServerInit({ commit }, { req, res, app }) {
    return this.$axios
      .$get(`${apiUrl}/auth/check`)
      .then(({ user }) => {
        console.log(user, '세션있음');
        commit('SET_USER', user);
      })
      .catch(() => {
        console.log('세션없음');
      });
  },
  signOut({ commit }) {
    return this.$axios
      .$delete(`${apiUrl}/auth/signout`)
      .then(() => {
        commit('INIT_USER');
        this.$router.push({ name: this.$router.name });
      })
      .catch(e => {
        throw new Error(e.response.data.message);
      });
  }
};
