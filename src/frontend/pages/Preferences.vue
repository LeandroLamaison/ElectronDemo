<script>
import { useRouter } from 'vue-router';

export default {
    name: 'PreferencesPage',
    setup() {
        const router = useRouter()

        function handleClick() {
            router.push('/')
        }

        return { handleClick }
    }
}
</script>

<template>
    <div class="page-wrapper">
        <h1 class="title">Preferences</h1>
        <button @click="handleClick">Go Back</button>
    </div>
</template>

<style type="css" scoped>
.page-wrapper {
    position: relative;
}

.title {
    margin-top: 12px;
    margin-left: 36px;
    font-size: 16px;
}
</style>