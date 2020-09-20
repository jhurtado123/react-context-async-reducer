import React, { useReducer } from 'react';

import usersReducer, { initialState } from './reducer';
import { UsersProvider } from './context';

export function UsersContextProvider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer(usersReducer, initialState);

  return (
    <UsersProvider value={[state, dispatch]}>
      {children}
    </UsersProvider>
  );
}
