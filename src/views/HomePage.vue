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

  <DefaultHome  v-if="!isLoggedIn"  />
  <LoggedHome v-else></LoggedHome>

</template>

<style>


</style>