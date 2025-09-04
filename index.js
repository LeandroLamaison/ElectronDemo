const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')
const { updateElectronApp } = require('update-electron-app')
const { injectDatabase } = require('./database')

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
    if (process.env.NODE_ENV === 'development') {
        window.webContents.openDevTools()
    }
}

app.whenReady().then(() => {
    createWindow()

    injectDatabase(ipcMain)

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
