<script>
import { useTodos } from '../composables/todos';

export default {
    name: 'TodoPanel',
    setup() {
        return {
            ...useTodos()
        }
    }
}
</script>

<template>
    <ul>
        <li v-for="todo in todos" :key="todo">
            {{ todo }}
        </li>
    </ul>
    <div>
        <button @click="addTodo"> Add </button>
        <button @click="removeTodo"> Remove </button>
    </div>
</template>