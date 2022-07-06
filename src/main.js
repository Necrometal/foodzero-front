import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useNavigationStore } from '@/store/navigation'

import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'

const pinia = createPinia()

const app = createApp(App)

window.baseurl = import.meta.env.VITE_APP_URL
window.apiurl = import.meta.env.VITE_API

app.use(pinia)

const navigation = useNavigationStore()

router.beforeEach((to, from) => {
    navigation.navigate(to.name)
})

app.use(router)

app.mount('#app')
