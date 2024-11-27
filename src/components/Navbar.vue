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
      <h3 v-if="isLoggedIn" class="text-success" >Welcome, </h3>
      <form v-else method="get" action="http://localhost:8081/api">
        <button class="btn btn-primary" type="submit">Login</button>
      </form>

    </div>
  </nav>
</template>

<style scoped>

</style>