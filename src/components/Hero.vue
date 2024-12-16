<script setup lang="ts">

import {ModalStore} from "@/store";

const modalStore = ModalStore()
</script>

<template>
  <div class="hero">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img
          src="https://media.istockphoto.com/id/2081769995/photo/holding-a-bowl-of-chicken-salad.jpg?s=2048x2048&w=is&k=20&c=DXOZF1MjqvdgUDQnb9g99d0lxiHEe6Gxau5YLcWMutA="
          class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold">Welcome to Health Teacker!</h1>

        <p class="py-6 text-slate-600 text-2xl">Your personal companion for a healthier, more active lifestyle. HealthTracker is designed to simplify the way you monitor your health and fitness, empowering you to achieve your wellness goals with ease.</p>
        <button class="btn btn-primary" @click="modalStore.toggleLoginModal()">Get Started</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>