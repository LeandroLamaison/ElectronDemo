const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')
const { updateElectronApp } = require('update-electron-app')

updateElectronApp()

const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    window.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    const todos = [{ text: 'TODO 1' }, { text: 'TODO 2'} ]
    ipcMain.handle('todos', () => todos)


    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })

})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
