<script>
import { useRouter } from 'vue-router';
import BackButton from '../components/BackButton.vue'

export default {
    name: 'PreferencesPage',
    components: { BackButton },
    setup() {
    }
}
</script>

<template>
    <BackButton class="back-btn" />
    <h1 class="title">Preferences</h1>
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
</style>