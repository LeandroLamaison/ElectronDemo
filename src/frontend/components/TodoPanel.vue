<script>
import { ref } from 'vue'
import { useTodos } from '../composables/todos';
import Textarea from './Textarea.vue'
import DateInput from './DateInput.vue'
import Button from './Button.vue'
import TodoItem from './TodoItem.vue';

export default {
    name: 'TodoPanel',
    components: {
        Textarea,
        DateInput,
        Button,
        TodoItem
    },
    setup() {
        const { todos, addTodo, removeTodo, checkTodo } = useTodos()
        const newTodoText = ref(null)
        const newTodoDueDate = ref(null)

        function handleAddTodo() {
            if(!newTodoText.value) {
                return
            }

            const newTodo = { 
                text: newTodoText.value,
                dueDate: newTodoDueDate.value
            }
            addTodo(newTodo)
            newTodoText.value = null
            newTodoDueDate = null
        }

        function handleRemoveTodo(todoID) {
            removeTodo(todoID)
        }

        function handleCheckTodo(todoID, value) {
            checkTodo(todoID, value)
        }

        return {
            todos,
            newTodoText,
            newTodoDueDate,
            handleAddTodo,
            handleRemoveTodo,
            handleCheckTodo
        }
    }
}
</script>

<template>
    <div class="add-todo-panel">
        <Textarea v-model="newTodoText" placeholder="What do you need to do?" />
        <DateInput v-model="newTodoDueDate" placeholder="When is it due?" />
        <Button class="add-todo-btn" :disabled="!newTodoText" @click="handleAddTodo"> Add </Button>
    </div>
    <ul class="todo-list">
        <template v-for="todo in todos" :key="todo.id">
            <TodoItem 
                :text="todo.text" 
                :done="todo.done"
                :dueDate="todo.dueDate" 
                @check="(value) => handleCheckTodo(todo.id, value)" 
                @remove="handleRemoveTodo(todo.id)"
            />
            <hr class="separator" />
        </template>
    </ul>
</template>

<style type="css" scoped>
.add-todo-panel {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.add-todo-panel * {
    margin-left: 16px;
}

.todo-list {
    list-style-type: none;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 16px 0 0 0;
    overflow-y: overlay;
    overflow-x: visible;
}

.separator {
    height: 0px;
    border: none;
    border-top: 1px solid #555;
}
</style>