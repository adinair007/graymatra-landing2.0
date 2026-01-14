import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import VueScrollTo from "vue-scrollto";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueScrollTo, {
  duration: 500,
  offset: -80,
});
app.mount("#app");
