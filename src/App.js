import React from 'react';
import './styleSheet/App.css';
import UserSessionsContainer from "./containers/UserSessionsContainer"
import Routes from './components/Routes';
import RecipesContainer from './containers/RecipesContainer';

function App() {
  return (
    <div className="App">
      <Routes />
      <UserSessionsContainer />
      <RecipesContainer />
    </div>
  );
}

export default App;
