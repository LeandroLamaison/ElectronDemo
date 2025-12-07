<script>
import TodoPanel from '../components/TodoPanel.vue';
import ConfigButton from '../components/ConfigButton.vue';

export default {
    name: 'MainPage',
    components: { TodoPanel, ConfigButton }
}
</script>

<template>
    <ConfigButton class="config-btn" />
    <h1 class="title">Electron Demo</h1>
    <TodoPanel />
</template>

<style type="css" scoped>
.page-wrapper {
    position: relative;
}

.config-btn {
    position: absolute;
    top: 8px;
    right: 8px;
}

.title {
    margin-top: 12px;
    margin-left: 36px;
    font-size: 16px;
}
</style>