import types from '@/store/users/types';
import checkIfUserAlreadyExists from '@/store/users/utils';

export default {
  addUser(context: Record<string, any>, data: Record<string, string>) {
    if (checkIfUserAlreadyExists(context.state.users, data.userEmail)) {
      context.commit(types.ADD_ERROR_MESSAGE, 'User already exists');
    } else {
      context.commit(types.ADD_USER, data);
      context.commit(types.ADD_ERROR_MESSAGE, '');
    }
  },
  deleteUser(context: Record<string, any>, data: Record<string, number>) {
    context.commit(types.DELETE_USER, data);
  },
};
