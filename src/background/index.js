const { notifyDueTodos } = require("./due-todos");

const backgroundTasks = [
  { task: notifyDueTodos, interval: 1000 * 60 * 60 * 24, immediate: true },
];

const createBackgroundProcesses = () => {
  backgroundTasks.forEach(async ({ task }) => {
    if (!task.immediate) {
      return;
    }
    await task();
  });

  backgroundTasks.forEach(({ task, interval }) => {
    setInterval(task, interval);
  });
};

module.exports = {
  createBackgroundProcesses,
};
