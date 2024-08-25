import { createApp } from 'vue'
import './style/index.css'
import App from './App.vue'
const app = createApp(App)
app.mount('#app')
document.body.setAttribute('arco-theme', 'dark')
