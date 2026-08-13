const { database } = require("../infra/database");

function loadTodos() {
  return database("todos")
    .select(["id", "text", "done", "due_date as dueDate"])
    .orderBy("id", "desc")
    .then((todos) => {
      return todos.map((todo) => ({
        ...todo,
        done: !!todo.done,
      }));
    });
}

function addTodo(todo) {
  return database("todos").insert({ text: todo.text, due_date: todo.dueDate });
}

function removeTodo(id) {
  return database("todos").where("id", id).delete();
}

function checkTodo(id, value) {
  return database("todos").where("id", id).update("done", value);
}

module.exports = { loadTodos, addTodo, removeTodo, checkTodo };
