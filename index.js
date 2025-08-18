const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

require('update-electron-app')()

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

    let counter = 0;
    setInterval(() => {
        counter++
    }, 1)
    ipcMain.handle('renderTime', () => counter)

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
