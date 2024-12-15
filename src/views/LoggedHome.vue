<script setup lang="ts">

import {storeToRefs} from "pinia";
import {useLoginStore} from "@/store";
import USERDASHBOARD from "@/components/UserDashboard.vue";
import UserDashboard from "@/components/UserDashboard.vue";

const userStore = useLoginStore()
const {user} = storeToRefs(userStore)
const isAdmin = userStore.isAdmin


</script>

<template>

  <section class="h-screen">

    <div v-if="isAdmin" id="admin">

    </div>
    <div v-else class="flex md:flex-col md:justify-center md:items-center">
      <UserDashboard/>
    </div>

  </section>

</template>

<style scoped>

</style>