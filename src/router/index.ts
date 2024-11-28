import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from "@/views/Layout.vue";
import HomePage from "@/views/HomePage.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children : [
      {
        path : "",
        name : "HomePage",
        component :HomePage

      }
    ]

  }
]

const router   = createRouter({
  history: createWebHistory(),
  routes
})

export default router
