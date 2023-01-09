import { createApp } from "vue";
import ViewUIPlus from "view-ui-plus";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "view-ui-plus/dist/styles/viewuiplus.css";

// createApp(App).use(store).use(router).mount('#app')

const app = createApp(App);

app.use(store).use(router).use(ViewUIPlus).mount("#app");

// git push -f https://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@github.com/Igor0110/text_vue_cli3/ master:gh-pages
