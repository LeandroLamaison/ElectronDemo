const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('appInfo', {
    version: () => ipcRenderer.invoke('get-app-version')
})

contextBridge.exposeInMainWorld('todo', {
    todos: () => ipcRenderer.invoke('todos'),
    add: (todo) => ipcRenderer.send('add-todo', todo),
    remove: () => ipcRenderer.send('remove-todo'),
    check: ({ id, value }) => ipcRenderer.send('check-todo', { id, value })
})