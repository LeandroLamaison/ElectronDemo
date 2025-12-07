<script>
import { useRouter } from 'vue-router'

export default {
    name: 'ConfigButton',
    setup() {
        const router = useRouter()

        function handleClick() {
            router.push('/preferences')
        }

        return {handleClick}
    }
}
</script>

<template>
    <span class="config-btn" @click="handleClick" />
</template>

<style type="css" scoped>
.config-btn {
    background: url('../assets/config.svg') no-repeat center center;
    background-size: contain;
    width: 20px;
    height: 20px;
    display: inline-block;
    cursor: pointer;
}
</style>