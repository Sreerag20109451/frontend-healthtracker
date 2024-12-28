<script setup lang="ts">

defineProps({
  id: Number
})
</script>

<template>
  <div class="card bg-base-100 w-96 shadow-xl">
    <figure class="px-10 pt-10">
      <img
          src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shoes"
          class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title"> Generate a comprehensive health report</h2>
      <p class="text-slate-900">Create Your Personalized and Detailed Health Reports and Insights!</p>
      <div class="card-actions flex flex-col justify-center items-center">
        <form>
          <button class="btn btn-primary"><a :href="`/users/${id}/details`">Generate Report</a></button>
        </form>

      </div>
    </div>
  </div>

</template>

<style scoped>

</style>