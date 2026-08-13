const { Notification } = require("electron");
const { loadDueTodos } = require("../business/todos");

async function notifyDueTodos() {
  const dueTodos = await loadDueTodos();
  dueTodos.forEach((todo) => {
    console.log(`Notifying due todo: ${todo.text}`);
    new Notification({
      title: "Due Todo",
      body: todo.text,
    }).show();
  });
}

module.exports = { notifyDueTodos };
