import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from "@/views/Layout.vue";
import HomePage from "@/views/HomePage.vue";
import Cards from "@/components/UserCard.vue";
import ErrorPage from "@/views/ErrorPage.vue";
import Register from "@/components/Register.vue";
import UserProfile from "@/views/UserProfile.vue";
import EditUser from "@/views/EditUser.vue";
import UserActivities from "@/views/UserActivities.vue";
import HealthStats from "@/views/HealthStats.vue";
import Report from "@/views/Report.vue";


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
      {
        path: "users/:id",
        name: "user",
        component :UserProfile,

      },
      {
        path:"users/:id/edit",
        name: "Edit user",
        component: EditUser
      },
      {
        path: "users/:id/activities",
        name: "userActivities",
        component :UserActivities,

      },
      {
        path:"users/:id/indicators",
        name: "stats",
        component: HealthStats
      },
      {
        path:"users/:id/details",
        name: "Report",
        component: Report
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
