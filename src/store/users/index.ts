import actions from '@/store/users/actions';
import mutations from '@/store/users/mutations';

const state = () => ({
  users: [],
  error: '',
});

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
