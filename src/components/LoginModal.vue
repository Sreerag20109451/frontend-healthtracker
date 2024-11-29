<script setup lang="ts">
import { ref } from 'vue';  // Import `ref` for reactive state

// Create a state to control modal visibility
defineProps<{

  isModalOpen : Boolean
} >()// Default value is true to open the modal

</script>

<template>
  <dialog open>
    <p>Greetings, one and all!</p>
    <form method="dialog">
      <button>OK</button>
    </form>
  </dialog>
</template>

<style scoped>
/* Add custom styles if needed */
</style>
