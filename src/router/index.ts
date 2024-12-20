import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from "@/views/Layout.vue";
import HomePage from "@/views/HomePage.vue";
import Cards from "@/components/UserCard.vue";
import ErrorPage from "@/views/ErrorPage.vue";
import Register from "@/components/Register.vue";


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

      },

    ]

  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/error",
    name: "Error",
    component: ErrorPage
  }


]

const router   = createRouter({
  history: createWebHistory(),
  routes
})

router.onError((err) => {
  router.push("/error")
})

export default router
