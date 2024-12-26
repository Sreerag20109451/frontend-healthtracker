<script setup lang="ts">
import {useRoute} from "vue-router";
import {useQuery} from "@tanstack/vue-query";
import {axiosInstance} from "@/utils/axiosInstance";
import {toast} from "vue3-toastify";

const Sessionid = localStorage.getItem("sessionId")

const route = useRoute()
const {id} = route.params

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
    <div class="lex flex-col  mx-auto my-auto">
  <div v-if="error">
    <h1 class="text-3xl">There is not enough information. Add health stats</h1>
  </div>
  <div >
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