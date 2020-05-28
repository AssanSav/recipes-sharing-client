import React from 'react';
import './styleSheet/App.css';
import UsersContainer from "./containers/UsersContainer"
import Routes from './components/Routes';
import { BrowserRouter as Router  } from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="App">
        <UsersContainer />
        <Routes />
      </div>
    </Router>
    
  );
}

export default App;
