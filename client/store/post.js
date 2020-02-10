const apiUrl = '/api';

export const state = () => ({});

export const mutations = {};

export const actions = {
  createPost({ commit }, formData) {
    this.$axios
      .$post(`${apiUrl}/post/`, formData)
      .then(res => console.log(res, '성공'))
      .catch(e => {
        throw new Error(e.response.data.message);
      });
  }
};
