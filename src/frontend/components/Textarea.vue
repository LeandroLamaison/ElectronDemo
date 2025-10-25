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
    border: 1px solid lightgrey;
    background-color: transparent;
    border-radius: 6px;
    width: 100%;
    padding: 8px;
    color: lightgray;
    resize: none;
}
</style>