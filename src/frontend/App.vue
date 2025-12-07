<script>
import { useAppInfo } from './composables/appInfo';
import TodoPanel from './components/TodoPanel.vue';
import ConfigButton from './components/ConfigButton.vue';

export default {
    name: 'ElectronDemoApp',
    components: { TodoPanel, ConfigButton },
    setup() {
        return { ...useAppInfo() }
    }
}
</script>

<template>
    <div class="main-wrapper">
        <div id="app" class="main-card">
            <router-view />
        </div>
        <div class="version"> v{{ version }} </div>
    </div>
</template>

<style type="css" scoped>
.main-wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.main-card {
    width: 60vw;
    height: 60vh;
    background-color: #424242;
    border-radius: 16px;
    padding: 24px;
    position: relative;
}

.version {
    font-size: 12px;
    position: absolute;
    bottom: 8px;
    right: 8px;
}
</style>