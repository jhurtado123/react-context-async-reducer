import React from 'react';

import UsersTable from './components/UsersTable/UsersTable';
import ActionsButtons from './components/ActionsButtons/ActionsButtons';

import { UsersContextProvider } from './context/users/UsersContextProvider';

import './App.css';

function App() {
  return (
    <UsersContextProvider>
      <div className="App">
        <UsersTable />
        <ActionsButtons />
      </div>
    </UsersContextProvider>
  );
}

export default App;
