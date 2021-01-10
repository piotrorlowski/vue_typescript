import Vue from 'vue';
import Vuex from 'vuex';
import users from '@/store/users';

Vue.use(Vuex);

const store: object = {
  state: {},
  modules: {
    users,
  },
};

export default new Vuex.Store(store);
