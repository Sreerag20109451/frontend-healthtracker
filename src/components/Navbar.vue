<script setup lang="ts">
import {storeToRefs} from "pinia";
import {ModalStore, useLoginStore} from "@/store";

const logoImage =  require("../assets/excercise.jpeg")

const modalStore = ModalStore()
const {isModalOpen}  = storeToRefs(modalStore)
const {isLoggedIn} = storeToRefs(useLoginStore())


console.log(isLoggedIn)

console.log(modalStore.isModalOpen)




</script>

<template>
  <nav class="navbar w-screen bg-opacity-0 bg-green-700" data-bs-theme="dark" >
    <div class="container-fluid px-20">
      <a class="navbar-brand" href="#">
        <div class="flex flex-row items-center justify-center ml-10">
          <img :src="logoImage" alt="Logo" width="60" height="40" class="d-inline-block align-text-top rounded-full object-fit-contain">
          <h3 class="text-3xl"><a href="/" class="no-underline">HealthTracker</a></h3>
        </div>
      </a>
      <div v-if="isLoggedIn"  class="d-flex flex-row justify-content-between">
        <button class="btn btn-active btn-primary mr-10">Logout</button>
      </div>
      <div v-else>
        <button class=" btn btn-active btn-primary mr-10" type="submit" @click="modalStore.toggleLoginModal()"  :hidden="isModalOpen">Login</button>
      </div>

    </div>
  </nav>
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