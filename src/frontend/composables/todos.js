import { onMounted, ref } from "vue";

export function useTodos() {
  const todos = ref([]);
  const isLoading = ref(false);

  async function loadTodos() {
    todos.value = await window.todo.todos();
  }

  async function addTodo(text) {
    await window.todo.add({ text });
    await loadTodos();
  }

  async function removeTodo(id) {
    await window.todo.remove(id);
    await loadTodos();
  }

  async function checkTodo(id, value) {
    await window.todo.check({ id, value });
    await loadTodos();
  }

  onMounted(async () => {
    await loadTodos();
  });

  return {
    todos,
    isLoading,
    loadTodos,
    addTodo,
    removeTodo,
    checkTodo,
  };
}
