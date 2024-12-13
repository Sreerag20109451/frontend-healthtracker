import { createApp } from 'vue'
import App from './App.vue'
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import  "bootstrap"
import router from './router'
import {createPinia} from "pinia";
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import {Button} from "primevue";


const pinia = createPinia()
const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(router).use(pinia).mount("#app")
