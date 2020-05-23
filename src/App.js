import React from 'react';
import './styleSheet/App.css';
import UsersContainer from "./containers/UsersContainer"
import Routes from './components/Routes';
import CategoriesContainer from "./containers/CategoriesContainer"


function App() {
  return (
    <div className="App">
      <UsersContainer />
      <CategoriesContainer />
      <Routes />
    </div>
  );
}

export default App;
