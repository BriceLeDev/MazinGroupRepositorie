import './bootstrap';
import '../css/app.css'
import { createApp } from 'vue';
import App from './App.vue'
import router from './plugin/router.js'
import vuetify from './plugin/vuetify.js'
const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')