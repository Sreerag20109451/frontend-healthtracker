<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useLoginStore} from "@/store";
import {ref} from "vue";
const {user} = storeToRefs(useLoginStore())

const isUserfound = ref(false)

</script>
<template>
  <section class="w-full md:mt-20 mt-32">
    <div class="breadcrumbs text-sm relative top-0 left-0">
      <ul>
        <li><a class="text-slate-800 text-xl no-underline">Home</a></li>
        <li><a class="text-slate-800 text-2xl no-underline">Admin Dashboard</a></li>
      </ul>
    </div>
    <div class="flex flex-col justify-center items-center space-y-6">

      <h1>How do you do, {{user.name}}??</h1>


      <form class="md:flex md:flex-row md:space-x-2 md:space-y-0 flex flex-col justify-center items-center space-y-4">

        <input
            type="number"
            placeholder="Enter the user ID"
            class="input input-bordered input-primary w-full max-w-xs" />

        <button class="btn btn-active btn-primary">Search by user id</button>
      </form>
      <form class="md:flex md:flex-row md:space-x-2 flex flex-col justify-center items-center space-y-4 md:space-y-0">

        <input
            type="email"
            placeholder="Enter the user email"
            class="input input-bordered input-primary w-full max-w-xs" />

        <button class="btn btn-active btn-primary">Search by Email</button>
      </form>

    </div>
  </section>
</template>

<style scoped>

</style>