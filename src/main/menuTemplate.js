const { BrowserWindow } = require("electron");

const { showOpenFile, showOpenDirectory } = require("./dialogEvents.js");

function getTemplate(mainWindow) {
  console.log(mainWindow);
  const template = [
    {
      label: "File",
      submenu: [
        {
          label: "OpenFile",
          click: async () => {
            showOpenFile(mainWindow);
          },
        },
        {
          label: "openDirectory",
          click: async () => {
            showOpenDirectory();
          },
        },
      ],
    },
    {
      label: "View",
      submenu: [
        {
          label: "Reload",
          accelerator: "F5",
          click: (item, focusedWindow) => {
            if (focusedWindow) {
              // on reload, start fresh and close any old
              // open secondary windows
              if (focusedWindow.id === 1) {
                BrowserWindow.getAllWindows().forEach((win) => {
                  if (win.id > 1) win.close();
                });
              }
              focusedWindow.reload();
            }
          },
        },
        {
          label: "Toggle Dev Tools",
          accelerator: "F12",
          click: () => {
            mainWindow.webContents.toggleDevTools();
          },
        },
      ],
    },
  ];

  return template;
}
module.exports = getTemplate;
//module.exports = { getTemplate: getTemplate };
