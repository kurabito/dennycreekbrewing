import { createApp } from 'vue'
import App from './App.vue'
import createRouter from './router.js'

// createApp(App).mount('#app')
// createApp(App).use(createRouter()).mount('#app');

const app = createApp(App).use(createRouter())
app.provide('bucket', "https://dennycreekbrewing.s3.us-west-2.amazonaws.com/")
app.mount("#app");
