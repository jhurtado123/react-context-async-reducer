import usersApiClient from '../../services/apiClient/users/users';
import Constants from '../../constants';

function createActions(state, dispatch) {
  return {
    fetchUsers: async () => {
      const response = await usersApiClient.getAllUsers();
      const users = await response.json();

      dispatch({
        type: Constants.FETCH_USERS,
        payload: users
      });
    },
    clearUsers: () => {
      dispatch({
        type: Constants.CLEAR_USERS
      })
    }
  }
}

export default createActions;
