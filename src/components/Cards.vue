<script setup lang="ts">
defineProps<{

  imageURL: string
  name: string,
  description: string

}>()


</script>

<template>
  <div class="bg-stone-100  m shadow-xl rounded-xl">
    <div class="card-body items-center text-center">
      <h2 class="card-title mt-10 text-5xl text-slate-800">{{name}}</h2>
      <p class="text-2xl" id="paragraph">{{description}}</p>
    </div>
    <figure class=" ">
      <img
          :src="imageURL"
          alt="Shoes"
          class="h-full w-full " />
    </figure>
  </div>


</template>

<style scoped>
h2{
  font-family: "Caveat", cursive;

}

#paragraph{
  font-family: "Asul", serif;
  font-weight: 400;
  font-style: normal;
  color: crimson;
}
</style>