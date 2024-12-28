<script setup lang="ts">

import router from "@/router";
import {nextTick, onMounted, ref} from "vue";
import axios, {AxiosError} from "axios";
import {toast, ToastifyContainer} from "vue3-toastify";
import {axiosInstance} from "@/utils/axiosInstance";

let alertRef = ref(false)
let name = ref<String>("")
let email =  ref<String>("")
let password = ref<String>("")
let role = ref<String>("user")


const register = async (e: Event) => {
  e.preventDefault()
  const body = {name: name.value, email: email.value, password: password.value, role: role.value}
  console.log(body)
  try{
    const resp = await axiosInstance.post("/users",body)
    if(resp.status ==201) {
      router.push("/"); // Navigate to the home page after the toast is shown
    }

  }
  catch (err){
    if(err instanceof  AxiosError && err.response){
      if(err?.response.status == 400){

        toast.error("This email is already in use")
        return
      }
    }
    else{
      router.push("/error")
    }
  }

}

</script>

<template>
  <section id="dialog" class="h-screen w-full bg bg-base-300 ">
    <ToastifyContainer/>
    <div class="flex flex-col  items-center justify-center py-10 px-6 " >
      <p class="text-center text-xl text-slate-600 ">Register User!</p>
      <div>
        <form  class="flex flex-col space-y-4 px-10 justify-center items-center mt-6" @submit="register">
          <label class="input input-bordered flex items-center gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70">
              <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" class="grow" v-model="name" placeholder="Username" />
          </label>
          <label class="input input-bordered flex items-center gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70">
              <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="email" class="grow" placeholder="Email" name="email" required v-model="email"/>
          </label>
          <label class="input input-bordered flex items-center gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70">
              <path
                  fill-rule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clip-rule="evenodd" />
            </svg>
            <input type="password" class="grow" placeholder="Password"  name="password" v-model="password" required/>
          </label>
          <select  v-model="role" class="select select-bordered w-full max-w-xs">
            <option disabled selected> Select the role</option>
            <option>user</option>
            <option>admin</option>
          </select>
          <button class="btn btn-block btn btn-primary"  type="submit">Register User</button>
          <button class="btn btn-block btn btn-warning"  type="button" @click="()=> router.push('/')" >Back</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>