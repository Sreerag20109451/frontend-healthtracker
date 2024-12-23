<script setup lang="ts">
import {storeToRefs} from "pinia";
import {ModalStore, useLoginStore} from "@/store";
import router from "@/router";

const logoImage =  require("../assets/excercise.jpeg")

const modalStore = ModalStore()
const loginStore = useLoginStore()
const {isModalOpen}  = storeToRefs(modalStore)
const {isLoggedIn} = storeToRefs(useLoginStore())

const logout  = () =>{
  modalStore.toggleLoginModal()
  loginStore.toggleLogin()
  localStorage.removeItem("user")
  router.push("/")

}
console.log(isLoggedIn)
console.log(modalStore.isModalOpen)
</script>

<template>

  <div class="navbar bg-zinc-100 text-primary-content flex flex-row justify-between">
    <div class="flex flex-row items-center justify-center ml-10">
      <img :src="logoImage" alt="Logo" width="60" height="40" class="d-inline-block align-text-top rounded-full object-fit-contain">
      <h3 class="text-3xl"><a href="/" class="no-underline">HealthTracker</a></h3>
      </div>
    <div>
      <div v-if="isLoggedIn"  class="d-flex flex-row justify-content-between hidden md:block">
        <button class="btn btn-primary mr-10" @click="logout"  >Logout</button>
      </div>
      <div v-else class="hidden md:block">
        <button class="btn btn-active btn-primary mr-10  " type="submit" @click="modalStore.toggleLoginModal()"  :hidden="isModalOpen">Login</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

h3{

  color: firebrick;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
      "MORF" 0;
}
</style>