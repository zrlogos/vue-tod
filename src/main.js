import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'
import axios from 'axios';
import { Toast } from 'vant';
axios.defaults.withCredentials = true;
const app = createApp(App)
app.use(Toast);
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')