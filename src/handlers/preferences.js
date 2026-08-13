const {
  loadPreferences,
  changePreferences,
} = require("../business/preferences");

function createPreferencesHandlers(ipcMain) {
  ipcMain.handle("preferences", () => {
    return loadPreferences();
  });

  ipcMain.on("change-preferences", async (_, preferences) => {
    return changePreferences(preferences);
  });
}

module.exports = {
  createPreferencesHandlers,
};
