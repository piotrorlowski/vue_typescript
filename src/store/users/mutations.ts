import types from '@/store/users/types';

export default {
  [types.ADD_USER](state, data) {
    const newId = state.users.length + 1;
    state.users.push({ id: newId, firstName: data.userFirstName, lastName: data.userLastName });
  },
  [types.DELETE_USER](state, data) {
    const removedUser = state.users.find((user) => user.id === data.id);
    const removedUserIndex = state.users.indexOf(removedUser);
    state.users.splice(removedUserIndex, 1);
  },
};
