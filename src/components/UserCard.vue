<script setup lang="ts">
defineProps<{

  imageURL: string
  name: string,
  description: string

}>()


</script>

<template>
  <div class="card bg-base-100 w-96 shadow-xl">
    <figure class="px-10 pt-10">
      <img
          src="https://media.istockphoto.com/id/1961182478/photo/happy-young-woman-using-phone.jpg?s=2048x2048&w=is&k=20&c=NFFSYvt-8v-FPwN0Vyio9BqOL8fSnjMXnEXmYZf55tU="
          alt="Shoes"
          class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title"> Manage your profile</h2>
      <p class="text-slate-900">Create Your Personalized Health Profile and Begin Your Journey!</p>
      <div class="card-actions flex flex-col justify-center items-center">
        <form>
          <button class="btn btn-primary">Show Profile</button>
        </form>
        <form>
          <button class="btn btn-secondary">Update Profile Profile</button>
        </form>
        <form>
          <button class="btn btn btn-danger"> Delete Profile</button>
        </form>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>