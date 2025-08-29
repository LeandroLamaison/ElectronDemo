const { Database } = require("sqlite3")

function injectStore(ipcMain) {
    const database = new Database('./db.sqlite3', err => {
        if (err) {
            throw err
        }
    })

    database.all(`
        CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY,
            text VARCHAR NOT NULL
        );    
    `, (err) => {
        if (err) {
            throw err
        }
    })

    ipcMain.handle('todos', () => {
        return new Promise(resolve => {
            database.all('SELECT id, text FROM todos', (err, rows) => {
                resolve(err ? [] : rows)
            })
        })
    })

    ipcMain.on('add-todo', async (_, todo) => {
        await database.all(`INSERT INTO todos (text) VALUES ("${todo.text}")`, err => console.error(err))
    })

    ipcMain.on('remove-todo', async () => {
       await database.all(`DELETE FROM todos WHERE id = (SELECT MAX(id) FROM todos)`, err => console.error(err))
    })
}

module.exports = { injectStore }