import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import "bootstrap/dist/css/bootstrap.min.css"
import  "bootstrap"
import router from './router'
import {createPinia} from "pinia";
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import  *  as components from 'vuetify/components'


const vuetify = createVuetify()
const pinia = createPinia()

createApp(App).use(vuetify).use(router).use(pinia).mount('#app')
