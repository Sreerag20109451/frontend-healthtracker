<script setup lang="ts">
</script>

<template>
  <div class="card bg-base-100 w-96 shadow-xl">
    <figure class="px-10 pt-10">
      <img
          src="https://plus.unsplash.com/premium_photo-1706300225472-44df84e573a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="activities"
          class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title"> Manage your Activities</h2>
      <p class="text-slate-900">Track Every Activity and Stay on Top of Your Health Goals</p>
      <div class="card-actions flex flex-col justify-center items-center">
        <form>
          <button class="btn btn-primary">Show Activities</button>
        </form>
        <form>
          <button class="btn btn-secondary">Create an Activity</button>
        </form>
        <form>
          <button class="btn btn !btn-danger"> Delete an Activity</button>
        </form>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>