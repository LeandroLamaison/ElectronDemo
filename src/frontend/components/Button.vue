<script>
export default {
    name: 'MyButton',
    emits: {
        click: null
    },
    setup(_, { emit }) {
        function doNothing() { }

        function handleClick() {
            emit('click')
        }

        return {
            doNothing,
            handleClick
        }
    }
}
</script>

<template>
    <button v-bind="$attrs" class="button" @click="doNothing" @click.prevent="handleClick">
        <slot />
    </button>
</template>

<style type="css" scoped>
.button {
    background-color: #4285f4;
    border-radius: 6px;
    padding: 8px 16px;
    color: white;
    box-shadow: none;
    outline: none;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
}

.button:hover {
    opacity: 0.7;
}
</style>x