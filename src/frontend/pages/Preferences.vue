<script>
import { ref } from 'vue'
import BackButton from '../components/BackButton.vue'
import RadioGroup from '../components/RadioGroup.vue'

export default {
    name: 'PreferencesPage',
    components: { BackButton, RadioGroup },
    setup(_, { emit }) {
        const options = [
            { text: 'Light', value: 'light', default: true },
            { text: 'Dark', value: 'dark' }
        ]

        const layoutMode = ref(preferences.layoutMode || null)

        function handleLayoutChange(newLayoutMode) {
            layoutMode.value = newLayoutMode
            emit('change-preferences', { layoutMode: newLayoutMode })
        }

        return { options, layoutMode, handleLayoutChange }
    }
}
</script>

<template>
    <BackButton class="back-btn" />
    <h1 class="title">Preferences</h1>
    <RadioGroup 
        :model-value="layoutMode" 
        label="Layout" 
        :options="options" 
        class="layout-input"
        @update:model-value="val => handleLayoutChange(val)"
    />
</template>

<style type="css" scoped>

.back-btn {
    position: absolute;
    top: 10px;
    left: 10px;
}

.title {
    margin-top: 12px;
    margin-left: 36px;
    font-size: 16px;
}

.layout-input {
    margin-top: 48px;
}
</style>