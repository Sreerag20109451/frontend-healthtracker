<script setup lang="ts">


import HomeCarousel from "@/components/HomeCarousel.vue";
import LoginModal from "@/components/LoginModal.vue";
import {storeToRefs} from "pinia";
import {ModalStore} from "@/store";
import FeatureAccordion from "@/components/FeatureAccordion.vue";
import Hero from "@/components/Hero.vue";

const {isModalOpen} =  storeToRefs(ModalStore())


</script>


<template>
  <section class="h-screen w-full">
    <section v-if="!isModalOpen" class="flex min-h-screen max-w-full" >
      <div class="md:my-auto  md:mx-auto h-full ">
        <Hero/>
      </div>

    </section>
    <div v-else class="flex max-h-screen max-w-1/2">
      <LoginModal :isModalOpen="isModalOpen" class="my-52 sm:my-36"/>
    </div>
  </section>
</template>

<style>
p{
  font-family: "Asul", serif;
  font-weight: 400;
  font-style: normal;
  color: chartreuse;
}


#second-head{
  font-family: "Chewy", system-ui;
  font-weight: 400;
  font-style: normal;
}
</style>