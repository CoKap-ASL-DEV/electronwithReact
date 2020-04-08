// Modules to control application life and create native browser window
const {
  app,
  BrowserWindow,
  Menu,

  ipcMain,
  shell,
} = require("electron");

const getTemplate = require("./main/menuTemplate");
//const { showOpenFile, showOpenDirectory } = require("./main/dialogEvents.js");

const fs = require("fs");
const path = require("path");
const url = require("url");

let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },

    // }
  });
  const menu = Menu.buildFromTemplate(getTemplate(mainWindow));
  Menu.setApplicationMenu(menu);
  // and load the index.html of the app.
  //mainWindow.loadFile("index.html");
  //mainWindow.loadURL("http://localhost:3000");  // 개발모드시
  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "/../build/index.html"),
      protocol: "file:",
      slashes: true,
    });

  mainWindow.loadURL(startUrl); // 개발모드 & 빌드모드 자동선택

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
}

// ipcMain.on("toggle-debug", (event, arg) => {
//   //디버기 툴 토글(on/off)
//   mainWindow.webContents.toggleDevTools();
// });
// ipcMain.on("refresh", (event, arg) => {
//   //페이지 갱신
//   mainWindow.reload();
// });

// var template = [
//   {
//     label: "File",
//     submenu: [
//       {
//         label: "OpenFile",
//         click: async () => {
//           showOpenFile(mainWindow);
//         },
//       },
//       {
//         label: "openDirectory",
//         click: async () => {
//           showOpenDirectory();
//         },
//       },
//     ],
//   },
//   {
//     label: "View",
//     submenu: [
//       {
//         label: "Reload",
//         accelerator: "F5",
//         click: (item, focusedWindow) => {
//           if (focusedWindow) {
//             // on reload, start fresh and close any old
//             // open secondary windows
//             if (focusedWindow.id === 1) {
//               BrowserWindow.getAllWindows().forEach((win) => {
//                 if (win.id > 1) win.close();
//               });
//             }
//             focusedWindow.reload();
//           }
//         },
//       },
//       {
//         label: "Toggle Dev Tools",
//         accelerator: "F12",
//         click: () => {
//           mainWindow.webContents.toggleDevTools();
//         },
//       },
//     ],
//   },
// ];

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

//app.whenReady().then(createWindow);
app.on("ready", (_) => {
  createWindow();
});
// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on("Hmessage", (event, arg) => {
  event.sender.send("HmessagePrint", "Hello Welcome");
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
