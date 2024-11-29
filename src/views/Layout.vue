<script setup lang="ts">

import Navbar from "@/components/Navbar.vue";
import {onMounted} from "vue";
import {useLoginStore, useUserStore} from "@/store";


onMounted(() => {
  useUserStore().setUser()
  useUserStore().user ? useLoginStore().toggleLogin() : null

})
const {isLoggedIn} = useLoginStore()
const {user} = useUserStore()


</script>

<template>

  <Navbar :user="user" :isLoggedIn="isLoggedIn" class="sticky top-0"></Navbar>
  <main class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <RouterView>

    </RouterView>

  </main>



</template>

