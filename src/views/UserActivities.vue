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
const queryClient = useQueryClient()
const { isPending, isError, data, error } = useQuery({ queryKey: ['useracts'], queryFn: async () =>
  {
    try {

      const response = await axiosInstance.get(`/users/${id}/activities`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
          "Sessionid": Sessionid
        },
        withCredentials: true
      })
      if (response.status == 200) {

        console.log(response.data.data)
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

const deleteActivity =async  ( actId: number | string) =>{
  toast.warning("Activity deleting",{
    position : toast.POSITION.TOP_CENTER,
    autoClose: 7000
  } )

  try{
    const response = await axiosInstance.delete(`/users/${id}/activities/${actId}`, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
        "Sessionid": Sessionid
      },
      withCredentials: true
    })
    if(response.status == 200){
      toast.success("Activity deleted", {
        position : toast.POSITION.TOP_CENTER
      })

      await queryClient.invalidateQueries({queryKey: ["useracts"]})

    }

  }
  catch(err: unknown){
    if(err instanceof  AxiosError && err.response){
      if(err?.response.status == 404){

        toast.error("Token expired, login Again",{
          position: toast.POSITION.TOP_CENTER
        })
      }
    }

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
          <li><a class="text-slate-800 text-2xl no-underline" href="/">Profile</a></li>
          <li></li>
        </ul>
      </div>
    </div>
    <div class=" mt-10 flex flex-col justify-start items-center space-y-6">
      <div v-if="isPending">
        <span class="loading loading-spinner loading-lg"></span>
      </div>
      <div v-if="data">
        <div v-if="data.length<0">
          <h1 class="text-3xl text-red-300">No Activities found for this user</h1>
        </div>
        <div v-else class="overflow x-auto mt-10">
          <table class="table">
            <!-- head -->
            <thead>
            <tr>
              <th></th>
              <th class="text-3xl">Id</th>
              <th class="text-3xl">Description</th>
              <th class="text-3xl">Duration</th>
              <th class="text-3xl">Calories</th>
              <th class="text-3xl">Started</th>
            </tr>
            </thead>
            <tbody>
            <!-- row 1 -->
            <tr v-for="(act, index) of data">
              <th></th>
              <td class="text-xl">{{act.id}}</td>
              <td class="text-xl">{{act.description}}</td>
              <td class="text-xl">{{act.duration}}</td>
              <td class="text-xl">{{act.started}}</td>
              <td class="text-xl">{{act.calories}}</td>
              <td><button class="btn btn-error" @click="deleteActivity(act.id)">Delete Activity</button></td>
            </tr>
            </tbody>
          </table>
          <div class="mt-10 flex flex-row space-x-4 justify-center items-center">


              <button class="btn btn-error"><a>Create Activity</a></button>

          </div>


        </div>
      </div>


    </div>
  </section>




</template>

<style scoped>

</style>