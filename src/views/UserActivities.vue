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
import {activities} from "@/interfaces/enums";
import {storeToRefs} from "pinia";

const Sessionid = localStorage.getItem("sessionId")
const route = useRoute()
const {id} = route.params
const loginStore = useLoginStore()
const queryClient = useQueryClient()
const description = ref()
const duration = ref()
const calories = ref()
const started = ref()
const userStore = useLoginStore()
const {user} = storeToRefs(userStore)
const isAdmin = userStore.isAdmin


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

const resetForm = ()=>{

  description.value= null
  duration.value = null
  calories.value =null
  started.value = null

}

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

const addActivity = async (e :Event) =>{

  e.preventDefault()
  const body = { description : description.value, duration: duration.value, calories: calories.value ,started: started.value, userId:id}
  resetForm()
  try{
    const response = await axiosInstance.post(`/users/${id}/activities/`,body ,{
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
        "Sessionid": Sessionid
      },
      withCredentials: true
    })
    if(response.status == 201){
      toast.success("Activity Created", {
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
      if(err?.response.status == 404){

        toast.error("Activity description is invalid",{
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
      <form class="flex flex-col w-96 justify-center items-center" @submit="addActivity">

        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Pick Activity</span>
          </div>
          <select  v-model="description" class="select select-sm select-secondary w-full max-w-xs">
            <option disabled selected>Pick the activity</option>
            <option>running</option>
            <option>walking</option>
            <option>jump roping</option>
            <option>sprinting</option>
          </select>

          <div class="label">
          </div>
        </label>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Enter the duration?</span>
          </div>
          <input type="number" v-model="duration"  min="0" max="600" placeholder="Duration" class="input input-bordered input-sm w-full max-w-xs" />
          <div class="label">
          </div>
        </label>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Enter the Calories</span>
          </div>
          <input type="number" v-model="calories" min="0" max="50" placeholder="Calories" class="input input-sm input-bordered w-full max-w-xs" />
          <div class="label">
          </div>
        </label>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Enter the Start datetime</span>
          </div>
          <input type="datetime-local" v-model="started" min="0" max="50" placeholder="started" class="input input-sm input-bordered w-full max-w-xs" />
          <div class="label">
          </div>
        </label>
        <button type="submit" class="btn btn-primary"><a>Create Activity</a></button>
      </form>
      <div v-if="isPending">
        <span class="loading loading-spinner loading-lg"></span>
      </div>
      <div v-if="data">
        <div  class="overflow x-auto mt-10">
          <table class="table">
            <!-- head -->
            <thead>
            <tr>
              <th></th>
              <th class="text-3xl">Id</th>
              <th class="text-3xl">Description</th>
              <th class="text-3xl">Duration</th>
              <th class="text-3xl">Started</th>
              <th class="text-3xl">Calories</th>
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
              <td><button v-if="!isAdmin" class="btn btn-error" @click="deleteActivity(act.id)">Delete Activity</button></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>
        <h1 class="text-3xl text-red-200e">No Activities found for the user</h1>

      </div>
    </div>

  </section>




</template>

<style scoped>

</style>