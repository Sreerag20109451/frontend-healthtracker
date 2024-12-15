<script setup lang="ts">
import { ref } from 'vue';
import {storeToRefs} from "pinia";
import {ModalStore, useLoginStore} from "@/store";
import { axiosInstance } from '@/utils/axiosInstance';
import {setUserToLocalStorage} from "@/utils/utils";
import router from "@/router";
import {toast} from "vue3-toastify";
const modalStore =  ModalStore()
const loginStore = useLoginStore()
const {isModalOpen} =  storeToRefs(modalStore)
const email = ref("")
const password = ref("")
const login =  async  (e: Event) =>{

  e.preventDefault()
  try{
    const resp = await axiosInstance.post("/login", {
      email: email.value,
      password: password.value
    })
    const token = resp.data.token
    const loggedInuser = resp.data.data
    setUserToLocalStorage(loggedInuser)
    localStorage.setItem('token', token)
    loginStore.setUser()
    loginStore.toggleLogin()
    console.log(`At success the modal open os ${isModalOpen.value}`)
    toast.success(`Welcome, ${loggedInuser.name}`, {
      position: toast.POSITION.TOP_CENTER,
    });

  } catch (error: any){

    if(error.response){
      let message = ""
      if(error.response.status == 403) message = "Error! Inavlid Email or Password"
      if(error.response.status == 500) message = "Uh! Uh! SOmething wrong"
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      router.push("/")
    }

  }



}



</script>

<template>
  <section id="dialog">
    <dialog :open="isModalOpen" id="dialog">
      <button class=" absolute top-0 right-0 rounded-full ">
        <i class="fa fa-window-close h-10 fa-3x rounded-full" aria-hidden="true" @click="modalStore.toggleLoginModal()"></i>
      </button>

      <div class="flex flex-col  items-center justify-center py-10 px-6" >
        <p class="text-center text-xl text-slate-600">Login to Healthtracker!</p>
        <div>
          <form  class="flex flex-col space-y-4 px-10 justify-center items-center" @submit="login">
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
            <button class="btn btn-block btn btn-primary"  type="submit">Login</button>
          </form>
        </div>
        <div class="mt-10 flex flex-col  items-center">
          <p class="text-xl text-slate-950"> Do not have an account?!</p>
          <form>
            <button class="btn btn-block  btn-primary">Register Now</button>
          </form>

        </div>
      </div>
    </dialog>
  </section>
</template>

<style scoped>
#dialog{
  background-color: #99f6de;
}
</style>
