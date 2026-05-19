<script>
import { useRouter } from 'vue-router'
import BackIcon from './icons/Back.vue'

export default {
    name: 'BackButton',
    components: { BackIcon },
    setup() {
        const router = useRouter()

        function handleClick() {
            router.push('/')
        }

        return {handleClick}
    }
}
</script>

<template>
    <BackIcon class="back-btn" @click="handleClick"/>
</template>

<style type="css" scoped>
.back-btn {
    width: 20px;
    height: 20px;
    display: inline-block;
    cursor: pointer;
}
</style>