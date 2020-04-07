import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

const { ipcRenderer } = window.require("electron");

//var HMevent = require("./renderer");

var Mousetrap = require("mousetrap");

class App extends Component {
  state = { Message: "Initial" };

  render() {
    Mousetrap.bind("4", () => {
      console.log("command shift k");
      //mainWindow.webContents.toggleDevTools();
    });

    ipcRenderer.on("HmessagePrint", (event, arg) => {
      console.log("kkkk");
      //alert(arg);
      this.setState({ Message: arg });
    });
    return (
      <div className="App">
        <header className="App-header">
          {/* <script type="text/javascript" src="./renderer.js"></script> */}
          <img src={logo} className="App-logo" alt="logo" />
          <h1 id="hello">{this.state.Message}</h1>
          <button
            onClick={() => {
              ipcRenderer.send("Hmessage", "start");
            }}
          >
            {" "}
            Click{" "}
          </button>
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
}

export default App;
