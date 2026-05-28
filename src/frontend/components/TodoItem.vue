<script>
import { computed } from 'vue';
import Checkbox from './Checkbox.vue'
import RemoveTodoBtn from './RemoveTodoBtn.vue'

export default {
    name: 'TodoItem',
    components: {
        Checkbox,
        RemoveTodoBtn
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        done: {
            type: Boolean,
            default: false
        },
        dueDate: {
            type: String,
            default: null
        }
    },
    emits: ['check', 'remove'],
    setup({ dueDate, done }, { emit }) {
        function handleCheckTodo(value) {
            emit('check', value)
        }

        function handleRemoveTodo() {
            emit('remove')
        }

        const dueDateFormatted = computed(() => {
            if (!dueDate) {
                return ''
            }
            return 'Due on ' + new Date(dueDate).toLocaleDateString()
        })

        const isDue = computed(() => {
            if(!dueDate || done) {
                return false
            }
            return new Date(dueDate) < new Date()
        })

        return {
            handleCheckTodo,
            handleRemoveTodo,
            dueDateFormatted,
            isDue
        }
    }
}
</script>

<template>
    <li class="todo-item">
        <div class="main">
            <Checkbox :modelValue="done" @update:modelValue="handleCheckTodo" />
            {{ text }}
        </div>
        <div class="due-date" :class="{ due: isDue }">
            {{ dueDateFormatted }}
        </div>
        <RemoveTodoBtn @click="handleRemoveTodo" />
    </li>
</template>

<style scoped>
.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    gap: 8px;
    padding: 4px 8px;
    box-sizing: border-box;
    text-align: bottom;
}

.todo-item > .main {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.todo-item .due-date.due {
    color: lightcoral;
}

.todo-item .due-date {
    color: gray;
    font-size: 10px;
    text-align: bottom;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

</style>