<script setup lang="ts">
import {useRoute} from "vue-router";
import {useQuery} from "@tanstack/vue-query";
import {axiosInstance} from "@/utils/axiosInstance";
import {toast} from "vue3-toastify";

const Sessionid = localStorage.getItem("sessionId")

const route = useRoute()
const {id} = route.params

toast.warning("Fetching report, wait ", {
  position: toast.POSITION.TOP_CENTER,
      autoClose: 20000
})

const { isPending, isError, data, error } = useQuery({ queryKey: ['userdeets'], queryFn: async () =>
  {

    try {

      const response = await axiosInstance.get(`/users/${id}/details`,{
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
          "Sessionid": Sessionid
        },
        withCredentials: true
      })
      if (response.status == 200) {

        toast.success("Details fetched", {
          position: toast.POSITION.TOP_CENTER
        })
        console.log(response.data.data)
        return response.data.data
      }
    }
    catch (e :unknown){

      toast.error("Not much details for genrating report" ,{
        position: toast.POSITION.TOP_CENTER
      })

    }

  },
  refetchOnWindowFocus:false

})

</script>

<template>
  <section class="h-screen w-full">
    <div class="w-2/3 mx-auto mt-20">
    <div class="breadcrumbs text-sm relative top-0 left-0">
      <ul>
        <li><a class="text-slate-800 text-xl no-underline" href="/">Home</a></li>
        <li><a class="text-slate-800 text-2xl no-underline" href="/">Dashboard</a></li>
        <li><a class="text-slate-800 text-2xl no-underline">Report</a></li>
        <li></li>
      </ul>
    </div>
    </div>
    <div class="flex flex-col mx-auto my-auto justify-center items-center">

  <div v-if="error" class="flex flex-col space-y-2 justify-center items-center">
    <h1 class="text-3xl">There is not enough information. Add health stats</h1>
  </div>
  <div v-if="data" class="mt-20 text-center">
    <h1 class="text-5xl text-red-900">Health Report</h1>
    <div class="overflow x-auto mt-10">
      <table class="table">
        <!-- head -->
        <thead>
        <tr>
          <th></th>
          <th class="text-xl">Age</th>
          <th class="text-xl">Height</th>
          <th class="text-xl">Weight</th>
          <th class="text-xl">Blood Oxygen Level</th>
          <th class="text-xl">HDL Level</th>
          <th class="text-xl">LDL  Level</th>
          <th class="text-xl capitalize">AST Level</th>
          <th class="text-xl capitalize">AST Level</th>
          <th class="text-xl capitalize">GFR Level</th>
        </tr>
        </thead>
        <tbody>
        <!-- row 1 -->
        <tr>
          <th></th>
          <td class="text-lg">{{data.indicators.age || "NA"}}</td>
          <td class="text-lg">{{data.indicators.height || "NA"}}</td>
          <td class="text-lg">{{data.indicators.weight || "NA"}}</td>
          <td class="text-lg">{{data.indicators.boxygen || "NA"}}</td>
          <td class="text-lg">{{data.indicators.ast || "NA"}}</td>
          <td class="text-lg">{{data.indicators.alt || "NA"}}</td>
          <td class="text-lg">{{data.indicators.gfr || "NA"}}</td>

        </tr>
        </tbody>
      </table>
      </div>
    </div>
      <div v-if="data?.risks" class="mt-20">
        <h4 class="text-lg text-slate-900 text-center">From your health stats, you are on path to have below health risks</h4>
          <ul v-for="(risk,ind) of data.risks" >
            <li class="text-md list-disc text-slate-900">{{risk}}</li>
          </ul>
        </div>
      <div v-if="data?.risks" class="mt-20">
        <h4 class="text-lg text-slate-900 text-center"> We advise you to follow below diets </h4>
        <ul v-for="(diet,ind) of data.diets" >
          <li class="text-md list-disc text-slate-900">{{diet.dietname +" containing,"+diet.content}}</li>
        </ul>
      </div>


      </div>


  </section>
</template>

<style scoped>

</style>