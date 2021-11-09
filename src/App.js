import React from 'react';
import logo from './logo.svg'
import './less/App.less';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-webpack-text">Webpack 5 on point!</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
