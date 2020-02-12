const apiUrl = '/api';

export const state = () => ({
  post: {}
});

export const mutations = {
  SET_POST(state, post) {
    state.post = post;
  }
};

export const actions = {
  createPost({ commit }, formData) {
    return this.$axios
      .$post(`${apiUrl}/post/`, formData)
      .then(res => console.log(res, '성공'))
      .catch(e => {
        throw new Error(e.response.data.message);
      });
  },
  getPost({ commit }, id) {
    return this.$axios
      .$get(`${apiUrl}/post/${id}`)
      .then(res => commit('SET_POST', res.post))
      .catch(e => {
        throw new Error(e.response.data.message);
      });
  }
};
