<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useLoginStore} from "@/store";
import {ref} from "vue";
import {useQuery} from "@tanstack/vue-query";
import {axiosInstance} from "@/utils/axiosInstance";
import router from "@/router";
const {user} = storeToRefs(useLoginStore())

console.log(localStorage.getItem("token"))



const selectedID = ref<number|string|null>(null)

const getToDetails = (e :Event) =>{
  e.preventDefault()
  const button = e.target as HTMLButtonElement
  const userID = button.getAttribute("value")
  router.push(`/users/${userID}`)
}

const { isPending, isError, data, error } = useQuery({ queryKey: ['user'], queryFn: async () =>
  {
    const response = await axiosInstance.get(`/users/`, {
      headers : {
        "Authorization" : `Bearer ${localStorage.getItem('token')}`
      },
      withCredentials:true
    })
    if(response.status == 200) {
      if(response.data.data.length>0)
      return response.data.data
    }
    throw new Error("Uh..oh Error fetching users, check the ide")
  },

})

console.log(data)

</script>
<template>
  <section class="w-full md:mt-20 mt-32">
    <div class="breadcrumbs text-sm relative top-0 left-0">
      <ul>
        <li><a class="text-slate-800 text-xl no-underline">Home</a></li>
        <li><a class="text-slate-800 text-2xl no-underline">Admin Dashboard</a></li>
      </ul>
    </div>
    <div class="flex flex-col justify-center items-center space-y-6">

      <h1 class="text-3xl">How do you do, {{user.name}}??</h1>


      <form class="md:flex md:flex-row md:space-x-2 md:space-y-0 flex flex-col justify-center items-center space-y-4" @submit="getUser">

        <input
            type="number"
            placeholder="Enter the user ID"
            class="input input-bordered input-primary w-full max-w-xs" />

        <button class="btn btn-active btn-primary"  >Search by user id</button>
      </form>
      <form class="md:flex md:flex-row md:space-x-2 flex flex-col justify-center items-center space-y-4 md:space-y-0">

        <input
            type="email"
            placeholder="Enter the user email"
            class="input input-bordered input-primary w-full max-w-xs" />
        <button class="btn btn-active btn-primary">Search by Email</button>
      </form>

    </div>
    <div v-if="data" id="usertable" class="mt-20 flex flex-col text-center space-x-4" >
      <div class="overflow-x-auto">
        <h1 class="text-2xl"> USERS</h1>

        <table class="table mt-10">
          <!-- head -->
          <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th class="text-xl">Id</th>
            <th class="text-xl">Name</th>
            <th class="text-xl">E-mail</th>
            <th class="text-xl">Role</th>
            <th></th>
          </tr>
          </thead>
          <tbody v-for="(user, index) in data">
          <!-- row 1 -->
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center gap-3">
                <div>
                  <!--                  id goes here-->
                  <div class="font-bold text-lg">{{ user.id }}</div>

                </div>
              </div>
            </td>
            <td>
              <!--              name goes here-->
              <span class="badge badge-ghost badge-sm text-lg">{{user.name}}</span>
            </td>
            <td>
              <!--              name goes here-->
              <span class="badge badge-ghost badge-sm text-lg">{{user.email}}</span>
            </td>
            <td>
              <!--              name goes here-->
              <span class="badge badge-ghost badge-sm text-lg">{{user.role}}</span>
            </td>
            <th>
              <form @submit="getToDetails">
              <button class="btn btn-ghost btn-xs text-lg" :value="user.id">Get Detailed Info</button>
              </form>
            </th>
          </tr>
          </tbody>
          <!-- foot -->
          <tfoot>
          <tr>
            <th></th>
            <th>Id</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Role</th>
            <th></th>
          </tr>
          </tfoot>
        </table>
      </div>

    </div>
  </section>
</template>

<style scoped>

</style>