import React from 'react';
import './styleSheet/App.css';
import UserSessionsContainer from "./containers/UserSessionsContainer"
import Routes from './components/Routes';

function App() {
  return (
    <div className="App">
      <Routes />
      <UserSessionsContainer />
    </div>
  );
}

export default App;
