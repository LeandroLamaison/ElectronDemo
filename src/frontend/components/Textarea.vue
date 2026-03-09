<script>
export default {
    name: 'MyTextarea',
    model: ['value', 'input'],
    props: {
        modelValue: {
            type: String,
            default: null
        }
    },
    setup(_, { emit }) {
        function handleInput(event) {
            emit('update:modelValue', event?.target?.value)
        }

        return { handleInput }
    }
}
</script>

<template>
    <textarea v-bind="$attrs" class="textarea" :value="modelValue" @input="handleInput" />
</template>

<style type="css" scoped>
.textarea {
    background-color: transparent;
    border-radius: 6px;
    width: 100%;
    padding: 8px;
    resize: none;
}

.main-wrapper.dark .textarea {
    border: 1px solid lightgrey;
    color: lightgrey;
}

.main-wrapper.white .textarea {
    border: 1px solid black;
    color: black;
}
</style>