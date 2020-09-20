import React, { useContext } from 'react';
import UsersContext from '../../context/users/context';

const UsersTable = () => {
  const [globalState] = useContext(UsersContext);
  const {
    test,
    users
  } = globalState;

  const printTableBody = () => {
    return React.Children.toArray(
      users.map(({ id, name, email }) => (
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{email}</td>
        </tr>
      ))
    );
  };

  const areUsersLoaded = !!users.length;
  return (
    <>
      {!areUsersLoaded && <h2>No users loaded ({test})</h2>}
      {areUsersLoaded && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
           {printTableBody()}
          </tbody>
        </table>
      )}
    </>
  )
};

export default UsersTable;