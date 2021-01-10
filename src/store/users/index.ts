import actions from '@/store/users/actions';
import mutations from '@/store/users/mutations';

const state = () => ({
  users: [],
});

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
