import usersApiClient from '../../services/apiClient/users/users';
import Constants from '../../constants';

export async function fetchUsers(dispatch) {
  const response = await usersApiClient.getAllUsers();
  const users = await response.json();

  dispatch({
    type: Constants.FETCH_USERS,
    payload: users
  });
}

export function clearUsers(dispatch) {
  dispatch({
    type: Constants.CLEAR_USERS
  })
}