const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("appInfo", {
  version: () => ipcRenderer.invoke("get-app-version"),
});

contextBridge.exposeInMainWorld("preferences", {
  preferences: () => ipcRenderer.invoke("preferences"),
  change: (preferences) => ipcRenderer.send("change-preferences", preferences),
});

contextBridge.exposeInMainWorld("todo", {
  todos: () => ipcRenderer.invoke("todos"),
  add: (todo) => ipcRenderer.send("add-todo", todo),
  remove: (id) => ipcRenderer.send("remove-todo", id),
  check: ({ id, value }) => ipcRenderer.send("check-todo", { id, value }),
});
