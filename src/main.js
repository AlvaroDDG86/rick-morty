import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import router from './router'
import ButtonVue from '@/components/Button.vue'


const app = createApp(App)
app.use(store)
app.use(VueAxios, axios)
app.use(VueLoading)
app.use(VueRouter)
app.use(router)
app.component('Button', ButtonVue)
app.mount('#app')
