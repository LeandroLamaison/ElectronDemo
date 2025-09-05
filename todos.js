const { database } = require('./database')

function createTodoHandlers(ipcMain) {
    ipcMain.handle('todos', () => {
        return database('todos').select(['id', 'text']).catch(err => console.error(err))
    })

    ipcMain.on('add-todo', async (_, todo) => {
        await database('todos').insert({ text: todo.text }).catch(err => console.error(err))
    })

    ipcMain.on('remove-todo', async () => {
       await database('todos')
        .where('id', database('todos').max('id'))
        .delete()
        .catch(err => console.error(err))
    })
}

module.exports = { createTodoHandlers }