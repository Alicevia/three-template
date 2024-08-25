import { createApp } from 'vue'
import './style/index.css'
import App from './App.vue'
import { router } from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')
document.body.setAttribute('arco-theme', 'dark')
