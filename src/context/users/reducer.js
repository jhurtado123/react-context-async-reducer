import Constants from '../../constants';

export const initialState = {
  users: [],
  test: '222',
};

const usersReducer = (state, action) => {
  switch (action.type) {
    case Constants.FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    case Constants.CLEAR_USERS:
      return {
        ...state,
        users: []
      };
    default:
      throw new Error();
  }
};

export default usersReducer;