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
  <Navbar :user="user" :isLoggedIn="isLoggedIn"  class="fixed-top"></Navbar>
    <RouterView>
    </RouterView>
</template>

