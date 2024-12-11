<script setup lang="ts">


import HomeCarousel from "@/components/HomeCarousel.vue";
import LoginModal from "@/components/LoginModal.vue";
import {storeToRefs} from "pinia";
import {ModalStore} from "@/store";
import {features} from "@/utils/utils";
import FeatureAccordion from "@/components/FeatureAccordion.vue";
import Hero from "@/components/Hero.vue";

const {isModalOpen} =  storeToRefs(ModalStore())

console.log(isModalOpen.value)
</script>


<template>
  <section v-if="!isModalOpen" class="flex min-h-screen max-w-full" >
    <div class="my-auto mx-auto h-full">
      <Hero/>

    </div>




  </section>
  <div v-else>
    <LoginModal :isModalOpen="isModalOpen"/>
  </div>

</template>

<style>
p{
  font-family: "Asul", serif;
  font-weight: 400;
  font-style: normal;
  color: chartreuse;
}

#heading{
  font-family: "Chewy", system-ui;
  font-weight: 400;
  font-style: normal;

}

#second-head{
  font-family: "Chewy", system-ui;
  font-weight: 400;
  font-style: normal;
}
</style>