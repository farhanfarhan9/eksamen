import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    authenticated: false,
    username: undefined,
  },
  mutations: {
    loggedIn (state, username) {
      state.authenticated = true;
      state.username = username;
    }
  }
});

export default store;
