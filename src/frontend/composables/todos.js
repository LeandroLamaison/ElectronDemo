import { onMounted, ref } from 'vue'

export function useTodos() {
    const todos = ref([])
    const isLoading = ref(false)

    async function loadTodos() {
        todos.value = await window.todo.todos()
    }

    async function addTodo() {
        const len = await window.todo.todos().then(res => res.length)
        const newTodo = { text: `TODO ${len+1}` }
        await window.todo.add(newTodo)
        await loadTodos()
    }

    async function removeTodo() {
        await window.todo.remove()
        await loadTodos()
    }

    onMounted(async () => {
        await loadTodos()
    })
    
    return {
        todos,
        isLoading,
        loadTodos,
        addTodo,
        removeTodo
    }
}