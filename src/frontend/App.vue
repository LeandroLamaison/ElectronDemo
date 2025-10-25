<script>
import { useAppInfo } from './composables/appInfo';
import TodoPanel from './components/TodoPanel.vue';

export default {
    name: 'ElectronDemoApp',
    components: { TodoPanel },
    setup() {
        return {...useAppInfo()}
    }
}
</script>

<template>
    <div class="main-wrapper">
        <div class="main-card">
            <h1 class="title">Electron Demo</h1>
            <TodoPanel />
            <div class="version"> v{{ version }} </div>
        </div>
    </div>
</template>

<style type="css" scoped>
.main-wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    width: 60vw;
    height: 60vh;
    background-color: #424242;
    border-radius: 16px;
    padding: 24px;
}

.title {
    margin-top: 12px;
    margin-left: 36px;
    font-size: 16px;
}

.version {
    margin-left: auto;
    font-size: 12px;
}
</style>