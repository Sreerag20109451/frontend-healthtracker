<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useLoginStore} from "@/store";
import UserOperationSelection from "@/components/UserOperationSelection.vue";
import {ref} from "vue";
import {features} from "@/utils/utils";
import Cards from "@/components/UserCard.vue";
import UserCard from "@/components/UserCard.vue";
const {user} = storeToRefs(useLoginStore())
const operationLink = ref(null)
</script>
<template>
<section class="w-full md:mt-20 mt-32">
  <div class="breadcrumbs text-sm relative top-0 left-0">
    <ul>
      <li><a class="text-slate-800 text-xl no-underline">Home</a></li>
      <li><a class="text-slate-800 text-2xl no-underline">Dash board</a></li>
    </ul>
  </div>
  <div class="flex flex-col justify-center items-center">
    <h1>How do you do, {{user.name}}??</h1>
    <div class="grid grid-cols-1 md:grid-cols-3">
      <UserCard/>
    </div>
  </div>
</section>
</template>

<style scoped>

</style>