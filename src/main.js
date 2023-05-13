import './assets/css/main.css'

import store from './store'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


const app = createApp(App)

app.use(router)
app.use(store);
app.mount('#app')
