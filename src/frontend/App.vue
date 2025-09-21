<script>
import { useAppInfo } from './composables/appInfo';
import TodoPanel from './components/TodoPanel.vue';

export default {
    name: 'ElectronDemoApp',
    components: {TodoPanel},
    setup() {
        return {...useAppInfo()}
    }
}
</script>

<template>
    <h1>Electron Demo {{ version }}</h1>
    <TodoPanel />
</template>
  