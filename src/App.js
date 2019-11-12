import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Me Hakan Erdem Temiz! Welcome to my react docker app. Please visit my
          portfolio
        </p>
        <a
          className="App-link"
          href="http://hakanerdemtemiz.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          My portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
