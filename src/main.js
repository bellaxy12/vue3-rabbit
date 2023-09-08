import '@/styles/common.scss'
import { lazyPlugin } from '@/directives'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { componentPlugin } from './components'
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')