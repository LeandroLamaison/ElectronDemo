const { database } = require("../infra/database");

function createTodoHandlers(ipcMain) {
  ipcMain.handle("todos", () => {
    return database("todos")
      .select(["id", "text", "done", "due_date as dueDate"])
      .orderBy("id", "desc")
      .then((todos) => {
        return todos.map((todo) => ({
          ...todo,
          done: !!todo.done,
        }));
      })
      .catch((err) => console.error(err));
  });

  ipcMain.on("add-todo", async (_, todo) => {
    await database("todos")
      .insert({ text: todo.text, due_date: todo.dueDate })
      .catch((err) => console.error(err));
  });

  ipcMain.on("remove-todo", async (_, id) => {
    await database("todos")
      .where("id", id)
      .delete()
      .catch((err) => console.error(err));
  });

  ipcMain.on("check-todo", async (_, { id, value }) => {
    await database("todos")
      .where("id", id)
      .update("done", value)
      .catch((err) => console.error(err));
  });
}

module.exports = { createTodoHandlers };
