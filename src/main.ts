import { createApp } from 'vue'
import App from './App.vue'
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import  "bootstrap"
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import router from './router'
import {createPinia} from "pinia";
import { VueQueryPlugin } from '@tanstack/vue-query'


const pinia = createPinia()
const app = createApp(App)

app.use(Vue3Toastify, {
    autoClose: 3000,
} as ToastContainerOptions);


app.use(router).use(pinia).mount("#app")
