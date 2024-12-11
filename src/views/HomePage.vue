<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useLoginStore, useUserStore} from "@/store";
import DefaultHome from "@/views/DefaultHome.vue";
import LoggedHome from "@/views/LoggedHome.vue";
import {storeToRefs} from "pinia";

onMounted(() => {
  useUserStore().setUser()
  useUserStore().user ? useLoginStore().toggleLogin() : null
})

const {isLoggedIn}  = storeToRefs(useLoginStore())
const {isAdmin} = storeToRefs(useUserStore())
</script>

<template>

  <main class="from-zinc-100 to-red-50 h-screen">
    <DefaultHome  v-if="!isLoggedIn"  />
    <LoggedHome v-else></LoggedHome>

  </main>


</template>

<style>


</style>