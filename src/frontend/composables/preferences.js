import { onMounted, ref } from "vue";

export function usePreferences() {
  const preferences = ref({});

  async function loadPreferences() {
    preferences.value = await window.preferences.preferences();
  }

  async function changePreferences(newValue) {
    await window.preferences.change(newValue);
    await new Promise((resolve) => setTimeout(resolve, 200));
    await loadPreferences();
  }

  onMounted(async () => {
    await loadPreferences();
  });

  return {
    preferences,
    loadPreferences,
    changePreferences,
  };
}
