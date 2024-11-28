<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useUserStore} from "@/store";

const logoImage =  require("../assets/excercise.jpeg")

defineProps<{
  isLoggedIn : Boolean,
  user :   User | null
}>()



</script>

<template>
  <nav class="navbar bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img :src="logoImage" alt="Logo" width="60" height="40" class="d-inline-block align-text-top object-fit-contain">
        Health Tracker
      </a>
      <div v-if="isLoggedIn"  class="d-flex flex-row justify-content-between">
        <h3 class="text-success">Welcome </h3>
        <button class="btn btn-danger">Logout</button>
      </div>

      <form v-else method="get" action="http://localhost:8081/api">
        <button class="btn btn-primary ml-2" type="submit">Login</button>
      </form>

    </div>
  </nav>
</template>

<style scoped>

</style>