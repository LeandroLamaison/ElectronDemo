<script>
import { useAppInfo } from './composables/appInfo';
import TodoPanel from './components/TodoPanel.vue';
import ConfigButton from './components/ConfigButton.vue';
import { usePreferences } from './composables/preferences';

export default {
    name: 'ElectronDemoApp',
    components: { TodoPanel, ConfigButton },
    setup() {
        const { preferences, changePreferences } = usePreferences()

        function handleChangePreferences(newPreferences) {
            changePreferences(newPreferences)
        }

        return { 
            ...useAppInfo(),
            preferences,
            handleChangePreferences
        }
    }
}
</script>

<template>
    <div class="main-wrapper" :class="[preferences.layoutMode]">
        <div id="app" class="main-card">
            <router-view @change-preferences="handleChangePreferences"/>
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
    border-radius: 16px;
    padding: 24px;
    position: relative;
    overflow: hidden;
}

.main-wrapper.dark {
    color: white;
}
.main-wrapper.light {
    color: black;
}

.main-wrapper.light .main-card {
    background-color: lightgray;
}

.main-wrapper.dark .main-card {
    background-color: #424242;
}

.version {
    font-size: 12px;
    position: absolute;
    bottom: 8px;
    right: 8px;
}
</style>