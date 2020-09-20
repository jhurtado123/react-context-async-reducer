import React, {useContext} from 'react';

import { clearUsers, fetchUsers } from '../../context/users/actions';
import UsersContext from '../../context/users/context';

function ActionsButtons() {
  const [globalState, dispatch] = useContext(UsersContext);
  const {
    users
  } = globalState;

  const button = !users.length
    ? (
      <button onClick={() => fetchUsers(dispatch)}>
        Fetch Users
      </button>
    )
    : (
      <button onClick={() => clearUsers(dispatch)}>
        Clear Users
      </button>
    );

  return (
    <>
      {button}
    </>
  );
}

export default ActionsButtons;