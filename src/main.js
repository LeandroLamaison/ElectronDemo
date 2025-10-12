require('dotenv').config()
const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')
const { updateElectronApp } = require('update-electron-app')
const { runMigrations } = require('./infra/database')
const { createTodoHandlers } = require('./business/todos')

updateElectronApp()

const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'frontend/preload.js')
        }
    })

    window.loadFile(path.join(__dirname, '../dist/frontend/index.html'))
    if (process.env.NODE_ENV === 'development') {
        window.webContents.openDevTools()
    }
}

app.whenReady().then(() => {
    runMigrations()

    createWindow()

    createTodoHandlers(ipcMain)

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })

    ipcMain.handle('get-app-version', () => {
        return app.getVersion();
    });
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
