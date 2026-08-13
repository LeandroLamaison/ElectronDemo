const { database } = require("../infra/database");

const MAX_DUE_TODOS = 5;

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

function loadDueTodos() {
  const today = new Date().toISOString().split("T")[0];
  return database("todos")
    .where("due_date", "<=", today)
    .andWhere("done", false)
    .orderBy("due_date", "desc")
    .limit(MAX_DUE_TODOS);
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

module.exports = { loadTodos, loadDueTodos, addTodo, removeTodo, checkTodo };
