<script setup lang="ts">

import Navbar from "@/components/Navbar.vue";
import {onMounted} from "vue";
import {useLoginStore} from "@/store";

const {isLoggedIn} = useLoginStore()


</script>

<template>
  <Navbar :user="user"   class="fixed-top"></Navbar>
    <RouterView>
    </RouterView>
</template>

