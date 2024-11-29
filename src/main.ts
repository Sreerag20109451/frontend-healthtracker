import { createApp } from 'vue'
import App from './App.vue'
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import  "bootstrap"
import router from './router'
import {createPinia} from "pinia";



const pinia = createPinia()
const app = createApp(App)

app.use(router).use(pinia).mount("#app")
