import '@/styles/common.scss'
import { lazyPlugin } from '@/directives'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { componentPlugin } from './components'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App)

app.use(createPinia().use(piniaPluginPersistedstate))
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')