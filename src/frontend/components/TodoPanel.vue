<script>
import { ref } from 'vue'
import { useTodos } from '../composables/todos';
import Textarea from './Textarea.vue'
import Button from './Button.vue'
import Checkbox from './Checkbox.vue'
import RemoveTodoBtn from './RemoveTodoBtn.vue'

export default {
    name: 'TodoPanel',
    components: {
        Textarea, 
        Button, 
        Checkbox,
        RemoveTodoBtn,
    },
    setup() {
        const { todos, addTodo, removeTodo, checkTodo } = useTodos()
        const newTodoText = ref(null)

        function handleAddTodo() {
            addTodo(newTodoText.value)
            newTodoText.value = null
        }

        function handleRemoveTodo(todoID) {
            removeTodo(todoID)
        }

        function handleCheckTodo(todoID, value) {
            console.log('HANDLE', todoID, value)
            checkTodo(todoID, value)
        }

        return {
            todos,
            newTodoText,
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
        <Button class="add-todo-btn" :disabled="!newTodoText" @click="handleAddTodo"> Add </Button>
    </div>
    <ul class="todo-list">
        <template v-for="todo in todos" :key="todo.id">
            <li class="todo-item">
                <div>
                    <Checkbox 
                        :modelValue="todo.done" 
                        @update:modelValue="(value) => handleCheckTodo(todo.id, value)" 
                    />
                    {{ todo.text }}
                </div>
                <RemoveTodoBtn @click="handleRemoveTodo(todo.id)"/>
            </li>
            <hr class="separator"/>
        </template>
    </ul>
</template>

<style type="css" scoped>
.add-todo-panel {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.add-todo-btn {
    margin-left: 16px;
}

.todo-list {
    list-style-type: none;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 16px 0 0 0;
    overflow-y: scroll;
    overflow-x: visible;

}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 8px;
  padding: 4px 8px;
  box-sizing: border-box;
}

.todo-item > div {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.separator {
    height: 0px;
    border:none;
    border-top: 1px solid #555;
}
</style>