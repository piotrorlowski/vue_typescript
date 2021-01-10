import types from '@/store/users/types';

export default {
  [types.ADD_USER](state: Record<string, any>, data: Record<string, string>) {
    const newId = state.users.length + 1;
    state.users.push({
      id: newId,
      firstName: data.userFirstName,
      lastName: data.userLastName,
      email: data.userEmail,
    });
  },
  [types.DELETE_USER](state: Record<string, any>, data: Record<string, number>) {
    const removedUser = state.users.find((user: Record<string, number>) => user.id === data.id);
    const removedUserIndex = state.users.indexOf(removedUser);
    state.users.splice(removedUserIndex, 1);
  },
  [types.ADD_ERROR_MESSAGE](state: Record<string, any>, data: string) {
    state.error = data;
  },
};
