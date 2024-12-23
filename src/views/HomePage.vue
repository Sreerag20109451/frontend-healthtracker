<script setup lang="ts">
import {useLoginStore} from "@/store";
import DefaultHome from "@/views/DefaultHome.vue";
import LoggedHome from "@/views/LoggedHome.vue";
import {storeToRefs} from "pinia";
const loginStore = storeToRefs(useLoginStore())
const {isLoggedIn} = loginStore


</script>

<template>

  <main class="h-screen w-full">
    <DefaultHome  v-if="!isLoggedIn"  />
    <LoggedHome v-else></LoggedHome>

  </main>


</template>

<style>


</style>