const filesystem = require("../infra/filesystem");

const PREFERENCES_FILENAME = "preferences";

function createPreferencesHandlers(ipcMain) {
  ipcMain.handle("preferences", () => {
    return filesystem.loadFileContent(PREFERENCES_FILENAME);
  });

  ipcMain.on("change-preferences", async (_, preferences = {}) => {
    return filesystem.editFileContent(PREFERENCES_FILENAME, preferences);
  });
}

module.exports = {
  createPreferencesHandlers,
};
