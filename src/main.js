require("dotenv").config();
const path = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");
const { updateElectronApp } = require("update-electron-app");
const { runMigrations } = require("./infra/database");
const { createTodoHandlers } = require("./handlers/todos");
const { createPreferencesHandlers } = require("./handlers/preferences");
const { createBackgroundProcesses } = require("./background");

updateElectronApp();

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "frontend/preload.js"),
    },
  });

  window.loadFile(path.join(__dirname, "../dist/frontend/index.html"));
  if (process.env.NODE_ENV === "development") {
    window.webContents.openDevTools();
  }
};

app.whenReady().then(() => {
  const startHidden = process.argv.includes("--hidden");

  app.setLoginItemSettings({
    openAtLogin: true,
    args: ["--hidden"],
  });

  runMigrations();
  createTodoHandlers(ipcMain);
  createPreferencesHandlers(ipcMain);
  createBackgroundProcesses();

  if (!startHidden) {
    createWindow();
  }

  app.on("activate", () => {
    const existingWindow = BrowserWindow.getAllWindows()[0];
    if (!existingWindow) {
      createWindow();
      return;
    }

    existingWindow.show();
    existingWindow.focus();
  });

  ipcMain.handle("get-app-version", () => {
    return app.getVersion();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
