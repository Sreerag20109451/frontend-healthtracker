<script setup lang="ts">

import {features} from "@/utils/utils";
import Cards from "@/components/Cards.vue";
</script>

<template>

    <div id="carouselExampleFade" class="carousel slide carousel-fade w-full h-full">

      <div class="carousel-inner">
        <div
            v-for="(feature, index) in features"
            :key="index"
            :class="['carousel-item', { active: index === 0 }]">
          <Cards
              :image-u-r-l="feature.imageURL"
              :name="feature.name"
              :description="feature.description"
          /> </div>
        </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>


</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

