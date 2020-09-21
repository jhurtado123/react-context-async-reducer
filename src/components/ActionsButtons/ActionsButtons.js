import React, { useContext } from 'react';

import UsersContext from '../../context/users/context';

function ActionsButtons() {
  const [globalState, actions] = useContext(UsersContext);
  const {
    users
  } = globalState;
  const {
    fetchUsers,
    clearUsers
  } = actions;

  const button = !users.length
    ? (
      <button onClick={() => fetchUsers()}>
        Fetch Users
      </button>
    )
    : (
      <button onClick={() => clearUsers()}>
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