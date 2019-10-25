import React from 'react';

import CallPatient from './Components/CallPatient';
import './App.scss';
import logo from './assets/logo.png';

function App() {
  const patienNames = ['John', 'Michael', 'Peter', 'Linda'];
  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="Sapphire" />
      </div>
      {patienNames.map((name, index) => (
        <CallPatient key={`${name}${index}`} name={name}></CallPatient>
      ))}
    </div>
  );
}

export default App;
