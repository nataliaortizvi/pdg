import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueClipboard from 'vue3-clipboard'

import App from './App.vue'
import router from './router'

import './assets/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueClipboard)

app.mount('#app')

