//const { ipcRenderer } = require("electron");
//window.ipcRenderer = require("electron").ipcRenderer;
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
// Modules to control application life and create native browser window
window.ipcRenderer = require("electron").ipcRenderer;

// window.addEventListener("DOMContentLoaded", () => {
//   const replaceText = (selector, text) => {
//     const element = document.getElementById(selector);
//     if (element) element.innerText = text;
//   };

//   for (const type of ["chrome", "node", "electron"]) {
//     replaceText(`${type}-version`, process.versions[type]);
//   }
// });

// process.once("loaded", () => {
//   window.addEventListener("message", (evt) => {
//     if (evt.data.type === "toggle-debug") {
//       ipcRenderer.send("toggle-debug");
//     }
//   });
//   window.addEventListener("message", (evt) => {
//     if (evt.data.type === "refresh") {
//       ipcRenderer.send("refresh");
//     }
//   });
// });
