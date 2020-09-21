import React, { useReducer } from 'react';

import usersReducer, { initialState } from './reducer';
import { UsersProvider } from './context';
import createActions from './actions';

export function UsersContextProvider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer(usersReducer, initialState);

  const actions = createActions(state, dispatch);

  return (
    <UsersProvider value={[state, actions]}>
      {children}
    </UsersProvider>
  );
}
