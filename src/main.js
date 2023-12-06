import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import bootstrap from "bootstrap";

createApp(App)
.use(router)
.use(bootstrap)
.mount('#app')
