<script setup lang="ts">

import {ref} from "vue";

const show =ref(false)

const toggleShow = ()=>{
    show.value = !show.value
}

defineProps<{

  name: string,
  description: string
  index:number

}>()

</script>

<template>
  <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
      <h2 class="accordion-header" :id="`panelsStayOpen-heading${index}`">
        <button class="accordion-button text-3xl" type="button" data-bs-toggle="collapse" :data-bs-target="`#panelsStayOpen-collapse${index}`" aria-expanded="true" :aria-controls="`#panelsStayOpen-collapse${index}`" >
          {{name}}
        </button>
      </h2>
      <div :id="`panelsStayOpen-collapse${index}`" class="accordion-collapse collapse" :class="{show : show.value}" :aria-labelledby="`panelsStayOpen-heading${index}`" >
        <div class="accordion-body text-left">
          <strong>{{description}}</strong>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>