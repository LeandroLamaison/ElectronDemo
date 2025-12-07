import { createRouter, createMemoryHistory } from "vue-router";

import MainView from "./pages/Main.vue";
import PreferencesView from "./pages/Preferences.vue";

const routes = [
  { path: "/", component: MainView },
  { path: "/preferences", component: PreferencesView },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
