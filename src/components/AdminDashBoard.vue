<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useLoginStore} from "@/store";
import {ref} from "vue";
import {useQuery} from "@tanstack/vue-query";
import {axiosInstance} from "@/utils/axiosInstance";
import router from "@/router";
import {toast} from "vue3-toastify";
const {user} = storeToRefs(useLoginStore())


const searchItem = ref("")
const userList    = ref<User[]>([])
const loginStore = useLoginStore()
const Sessionid =localStorage.getItem("sessionId")
const selectedID = ref<number|string|null>(null)
const hasFetched = ref<Boolean>(false)

const getToDetails = (e :Event) =>{
  e.preventDefault()
  const button = e.target as HTMLButtonElement
  const userID = button.getAttribute("value")
  router.push(`/users/${userID}`)
}

const { isPending, isError, data  , error } = useQuery({ queryKey: ['user'], queryFn: async () =>
  {
    const response = await axiosInstance.get(`/users/`, {
      headers : {
        "Authorization" : `Bearer ${localStorage.getItem('token')}`,
        "Sessionid" : Sessionid
      },
      withCredentials:true
    })
    if(response.status == 200) {
      if(response.data.data.length>0)
        userList.value = response.data.data
      hasFetched.value = true
      return response.data.data
    }
    if(response.status == 403){
      toast.error("Uh oh, it seems you do not have access")
      return response.status
    }
    if(response.status == 401){
      toast.error("invalid token, session expired")
      loginStore.toggleLogin()
      return router.push("/")
    }
    throw new Error("Uh..oh Error fetching users, check the ide")
  },
  staleTime: 1000 * 60 * 60

})



const getUser = (e :Event) => {
  e.preventDefault()

  const userFromEmails = userList.value.filter((user) => user?.email === searchItem.value)
  const userFromName = userList.value.filter((user) => user?.name == searchItem.value)
  const userFound = [...userFromName,...userFromEmails]
  if(userFound.length == 0){
    toast.error("No user found")
    return
  }
  userList.value = userFound
}

const getAllusers = () => {
  console.log(data.value)
  if(data && Array.isArray(data.value)){
    console.log("its checking")
    userList.value = data.value
  }

}


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

      <h1 class="text-3xl">How do you do, {{user.name}}</h1>


      <form class="md:flex md:flex-row md:space-x-2 md:space-y-0 flex flex-col justify-center items-center space-y-4" @submit="getUser">

        <input
            type="text"
            placeholder="Enter the username or email"
            class="input input-bordered input-primary w-full max-w-xs"  v-model="searchItem"/>

        <button class="btn btn-active btn-primary" >Search User</button>
      </form>
      <button class="btn btn-primary" @click="getAllusers">Show all users</button>

    </div>
    <div  id="usertable" class="mt-20 flex flex-col text-center space-x-" >

      <div class="overflow-x-auto">

        <h1 class="text-2xl"> USERS</h1>
        <div v-if="isPending">
          <span class="loading loading-bars loading-xs"></span>

        </div>
        <div v-if="isError || error">
          <h1>Error</h1>
        </div>

        <table v-if="data"  class="table mt-10">
          <!-- head -->
          <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th class="text-xl"></th>
            <th class="text-xl">Name</th>
            <th class="text-xl">E-mail</th>
            <th></th>
          </tr>
          </thead>
          <tbody v-for="(user, index) in userList">
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
                  <div class="avatar placeholder">
                    <div class="bg-neutral text-neutral-content w-24 rounded-full">
                      <span class="text-3xl capitalize">{{user.name[0]}}</span>
                    </div>
                  </div>

                </div>
              </div>
            </td>
            <td>
              <!--              name goes here-->
              <span class="badge badge-ghost badge-sm text-lg"> <a :href="`/users/${user.id}`">{{user.name}}</a> </span>
            </td>
            <td>
              <!--              name goes here-->
              <span class="badge badge-ghost badge-sm text-lg">{{user.email}}</span>
            </td>
            <th>
              <button class="btn btn-ghost btn-xs text-lg" > <a :href="`/users/${user.id}/activities`">Get Activities</a></button>
            </th>
            <th>
              <button class="btn btn-ghost btn-xs text-lg" > <a :href="`/users/${user.id}/indicators`">Get Health Stats</a></button>
            </th>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
  </section>
</template>

<style scoped>

</style>