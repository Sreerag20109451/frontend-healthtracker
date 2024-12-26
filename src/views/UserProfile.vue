<script setup lang="ts">

import {useRoute} from "vue-router";
import {useQuery, useQueryClient} from "@tanstack/vue-query";
import {axiosInstance} from "@/utils/axiosInstance";
import {toast} from "vue3-toastify";
import UserCard from "@/components/UserCard.vue";
import ReportCard from "@/components/ReportCard.vue";
import ActivitiesCard from "@/components/ActivitiesCard.vue";
import UserDashboard from "@/components/UserDashboard.vue";
import {useLoginStore} from "@/store";
import router from "@/router";
import {ref} from "vue";
import {AxiosError} from "axios";

const Sessionid = localStorage.getItem("sessionId")

const route = useRoute()
const {id} = route.params
const loginStore = useLoginStore()
const isAdmin = loginStore.isAdmin
let generatedReport = ref(false)

let reportData =ref(null)


const { isPending, isError, data, error } = useQuery({ queryKey: ['userdeets'], queryFn: async () =>
  {

    try {

     const response = await axiosInstance.get(`/users/${id}`, {
       headers: {
         "Authorization": `Bearer ${localStorage.getItem('token')}`,
         "Sessionid": Sessionid
       },
       withCredentials: true
     })
     if (response.status == 200) {

       return response.data.data
     }
   }
   catch (e :unknown){

     toast.error("No user found, login again" ,{
       position: toast.POSITION.TOP_CENTER
     })

   }

  },
  refetchOnWindowFocus:false

})


const deleteUser =async  (e: Event) =>{
  e.preventDefault()

  try{
    const response = await axiosInstance.delete(`/users/${id}`, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
        "Sessionid": Sessionid
      },
      withCredentials: true
    })
    if(response.status == 200){
      console.log(response)
      loginStore.toggleLogin()
      localStorage.clear()
      await router.push("/")


    }

  }
  catch(e: unknown){
    console.log(e)
  }
}


</script>

<template>
  <section class="w-full h-screen">
    <div class="w-2/3 mx-auto mt-20">
      <div class="breadcrumbs text-sm relative top-0 left-0">
        <ul>
          <li><a class="text-slate-800 text-xl no-underline" href="/">Home</a></li>
          <li><a class="text-slate-800 text-2xl no-underline" href="/">Dashboard</a></li>
          <li><a class="text-slate-800 text-2xl no-underline">Profile</a></li>
          <li></li>
        </ul>
      </div>
    </div>
    <div class=" mt-10 flex flex-col justify-start items-center space-y-6">
      <div v-if="isPending">
        <span class="loading loading-spinner loading-lg"></span>
      </div>
      <div v-if="data">
        <div class="overflow x-auto mt-10">
          <table class="table">
            <!-- head -->
            <thead>
            <tr>
              <th></th>
              <th class="text-5xl">Id</th>
              <th class="text-5xl">Name</th>
              <th class="text-5xl">Email</th>
            </tr>
            </thead>
            <tbody>
            <!-- row 1 -->
            <tr>
              <th></th>
              <td class="text-3xl">{{data.id}}</td>
              <td class="text-3xl">{{data.name}}</td>
              <td class="text-3xl">{{data.email}}</td>
            </tr>
            </tbody>
          </table>
          <div class="mt-10 flex flex-row space-x-4 justify-center items-center">
              <button class="btn btn-accent"><a :href="`/users/${data.id}/edit`">Edit</a></button>
            <form v-if="!isAdmin"  @submit="deleteUser">
              <button class="btn btn-error"><a>Delete</a></button>
            </form>
            <button class="btn btn-primary"> <a :href="`/users/${id}/details`">Generate Report</a></button>

          </div>




        </div>
        </div>
    </div>
  </section>




</template>

<style scoped>

</style>