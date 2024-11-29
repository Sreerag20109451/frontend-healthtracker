<script setup lang="ts">


import HomeCarousel from "@/components/HomeCarousel.vue";

console.log("dsd")

</script>

<template>
  <section >
    <div class="grid md:grid-cols-2 ml-10 mr-10 gap-y-8 md:gap-x-8 px-10 py-10 " >
<!--      The text below are AI generated-->
      <div  class="flex flex-col ">
        <h1 class="text-amber-300  text-6xl mt-10" id="heading">Welcome to Health Tracker</h1>
        <h3 id="second-head" class="text-5xl mt-10">Take charge of your health like never before with Health Tracker!</h3>
        <p id="para" class="text-3xl mt-10">Our application is designed to empower you to monitor and manage your well-being effectively. Whether you're striving for fitness goals, keeping an eye on your daily activities, or managing health metrics, Health Tracker makes it seamless and intuitive.</p>
        <p id="para" class="text-3xl mt-10">Take the first step towards a healthier, happier you. Let Health Tracker be your companion on the journey to achieving your wellness goals.
          Start tracking. Start thriving! 🌟</p>

        <p></p>
      </div>
      <div>
        <HomeCarousel/>
      </div>
    </div>


  </section>

</template>

<style>
p{
  font-family: "Asul", serif;
  font-weight: 400;
  font-style: normal;
}

#heading{
  font-family: "Kablammo", system-ui;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
      "MORF" 0;

}

#second-head{
  font-family: "Chewy", system-ui;
  font-weight: 400;
  font-style: normal;
}
</style>