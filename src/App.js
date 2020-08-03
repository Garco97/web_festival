import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core';
import Header from './Components/Header';
import AboutUs from './Components/AboutUs';
import PastEditions from './Components/PastEditions';
function App() {
  return (
    <div className="App">
        <Header />
        <AboutUs />
        <PastEditions />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button color="primary">Hello World</Button>

      </header>
    </div>
  );
}

export default App;
