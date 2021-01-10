import types from '@/store/users/types';

export default {
  addUser({ commit }, data) {
    commit(types.ADD_USER, data);
  },
  deleteUser({ commit }, data) {
    commit(types.DELETE_USER, data);
  },
};
