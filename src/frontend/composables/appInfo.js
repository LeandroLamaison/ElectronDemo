import { onMounted, ref } from 'vue'

export function useAppInfo() {
    const version = ref(null)

    async function loadVersion() {
        version.value = await appInfo.version()
    }

    onMounted(async () => {
        await loadVersion()
    })

    return {
        version,
        loadVersion
    }
}