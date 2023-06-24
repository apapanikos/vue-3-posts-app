import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// libs
import httpClient from '@/services/axios/httpClient'
import { AxiosKey } from '@/utilities/symbols'

const app = createApp(App)

app.provide(AxiosKey, httpClient)

app.use(createPinia())
app.use(router)

app.mount('#app')
