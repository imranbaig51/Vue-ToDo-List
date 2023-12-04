
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import './style.css'
//Use Pinia Instance
const pinia = createPinia()
const app = createApp(App)
//Create Pinia Instance
app.use(pinia)
createApp(App).mount('#app')
