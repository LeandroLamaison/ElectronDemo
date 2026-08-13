const filesystem = require("../infra/filesystem");

const PREFERENCES_FILENAME = "preferences";

function loadPreferences() {
  return filesystem.loadFileContent(PREFERENCES_FILENAME);
}

function changePreferences(preferences = {}) {
  return filesystem.editFileContent(PREFERENCES_FILENAME, preferences);
}

module.exports = {
  loadPreferences,
  changePreferences,
};
