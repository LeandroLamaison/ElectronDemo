const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
})

contextBridge.exposeInMainWorld('todo', {
    todos: () => ipcRenderer.invoke('todos'),
    add: (todo) => ipcRenderer.send('add-todo', todo),
    remove: () => ipcRenderer.send('remove-todo')
})