const { contextBridge, ipcRenderer, app } = require('electron')

contextBridge.exposeInMainWorld('appInfo', {
    version: () => ipcRenderer.invoke('get-app-version')
})

contextBridge.exposeInMainWorld('todo', {
    todos: () => ipcRenderer.invoke('todos'),
    add: (todo) => ipcRenderer.send('add-todo', todo),
    remove: () => ipcRenderer.send('remove-todo')
})