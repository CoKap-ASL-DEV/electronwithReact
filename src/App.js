import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

import MainLayout from "./MainLayout";

const { ipcRenderer } = window.require("electron");

//var HMevent = require("./renderer");

var Mousetrap = require("mousetrap");

class App extends Component {
  state = {
    message: "Initial",
    dTreeData: null,
  };
  render() {
    Mousetrap.bind("4", () => {
      console.log("command shift k");
      //mainWindow.webContents.toggleDevTools();
    });

    ipcRenderer.on("HmessagePrint", (event, arg) => {
      console.log("kkkk");
      this.setState({ message: arg });
    });

    ipcRenderer.on("GetTreeData", (event, arg) => {
      console.log(arg);
      //debugger;
      this.setState({ dTreeData: [arg] });

      //dTreeData = arg;
    });
    console.log(this.state.dTreeData);
    return (
      <div>
        <MainLayout message={this.state.message} dtree={this.state.dTreeData} />
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     {/* <script type="text/javascript" src="./renderer.js"></script> */}
      //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
      //     <h1 id="hello">{this.state.Message}</h1>
      //   </header>
      //   <body>
      //     <button
      //       onClick={() => {
      //         ipcRenderer.send("Hmessage", "start");
      //       }}
      //     >
      //       Click
      //     </button>
      //     <TreeView />
      //   </body>
      // </div>
    );
  }
}

export default App;
