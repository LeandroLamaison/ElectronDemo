<script>
import { useRouter } from 'vue-router'
import CogIcon from './icons/Cog.vue'

export default {
    name: 'ConfigButton',
    components: { CogIcon },
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
    <CogIcon class="config-btn" @click="handleClick"/>
</template>

<style type="css" scoped>
.config-btn {
    width: 20px;
    height: 20px;
    display: inline-block;
    cursor: pointer;
}
</style>