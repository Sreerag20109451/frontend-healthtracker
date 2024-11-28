import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import "bootstrap/dist/css/bootstrap.min.css"
import  "bootstrap"
import router from './router'
import {createPinia} from "pinia";


const primeVue = PrimeVue()
const pinia = createPinia()

createApp(App).use(router).use(PrimeVue).use(pinia).mount('#app')
