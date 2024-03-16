import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'
import axios from 'axios';

// 配置 Axios
axios.defaults.baseURL = 'http://localhost:8080'; // 设置后端 API 的基础 URL
axios.defaults.withCredentials = true; // 允许发送 Cookie

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')