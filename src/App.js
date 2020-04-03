import React from "react";
import logo from "./logo.svg";
import "./App.css";
var Mousetrap = require("mousetrap");

function App() {
  Mousetrap.bind("4", () => {
    console.log("command shift k");
    //mainWindow.webContents.toggleDevTools();
  });
  return (
    <div className="App">
      <header className="App-header">
        <script type="text/javascript" src="./renderer.js"></script>
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
