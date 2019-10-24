import React from 'react';

import CallPatient from './Components/CallPatient';
import './App.css';
import logo from './assets/logo.png';

function App() {
  const patienNames = ['John', 'Michael', 'Peter', 'Linda'];
  return (
    <div className="App">
      <div
        style={{
          backgroundColor: '#61b4d3',
          display: 'flex',
          paddingLeft: '20px',
        }}
      >
        <img style={{ height: '40px' }} src={logo} alt="Sapphire" />
      </div>
      {patienNames.map(name => (
        <CallPatient name={name}></CallPatient>
      ))}
    </div>
  );
}

export default App;
