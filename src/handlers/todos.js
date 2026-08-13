const {
  loadTodos,
  addTodo,
  removeTodo,
  checkTodo,
} = require("../business/todos");

function createTodoHandlers(ipcMain) {
  ipcMain.handle("todos", () => {
    return loadTodos().catch((err) => console.error(err));
  });

  ipcMain.on("add-todo", async (_, todo) => {
    await addTodo(todo).catch((err) => console.error(err));
  });

  ipcMain.on("remove-todo", async (_, id) => {
    await removeTodo(id).catch((err) => console.error(err));
  });

  ipcMain.on("check-todo", async (_, { id, value }) => {
    await checkTodo(id, value).catch((err) => console.error(err));
  });
}

module.exports = { createTodoHandlers };
