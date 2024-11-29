<script setup lang="ts">
import {storeToRefs} from "pinia";
import {ModalStore, useUserStore} from "@/store";

const logoImage =  require("../assets/excercise.jpeg")

defineProps<{
  isLoggedIn : Boolean,
  user :   User | null
}>()


const modalStore = ModalStore()
const {isModalOpen}  = storeToRefs(modalStore)



</script>

<template>
  <nav class="navbar w-screen bg-opacity-70 bg-red-200" data-bs-theme="dark" >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <div class="flex flex-row items-center justify-center">
          <img :src="logoImage" alt="Logo" width="60" height="40" class="d-inline-block align-text-top rounded-full object-fit-contain">
          <h3 class="text-cyan-700"><a href="/" class="no-underline">HealthTracker</a></h3>
        </div>

      </a>
      <div v-if="isLoggedIn"  class="d-flex flex-row justify-content-between">
        <button class="btn btn-danger">Logout</button>
      </div>

      <div v-else>
        <button class="btn btn-primary ml-2" type="submit" @click="modalStore.toggleLoginModal()"  :hidden="isModalOpen">Login</button>
      </div>

    </div>
  </nav>
</template>

<style scoped>

</style>