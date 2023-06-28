import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './axios'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// createApp(App).use(router).use(pinia).mount('#app')
const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')