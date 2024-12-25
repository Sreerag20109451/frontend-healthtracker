<script setup lang="ts">
import {ref} from "vue";
import {axiosInstance} from "@/utils/axiosInstance";
import {toast} from "vue3-toastify";
import {useRoute, useRouter} from "vue-router";
const Sessionid = localStorage.getItem("sessionId")

const route = useRoute()
const {id} = route.params
let age = ref(null)
let height = ref(null)
let weight = ref(null)
let boxygen = ref(null)
let hdl = ref(null)
let ldl = ref(null)
let ast = ref(null)
let alt = ref(null)
let gfr = ref(null)


const resetForm = () =>{

  age.value = null
  height.value = null
  weight.value = null
  boxygen.value = null
  hdl.value = null
  ldl.value = null
  ast.value = null
  alt.value = null
  gfr.value = null

}

const createHealthStat = async (e: Event) => {
  e.preventDefault()

  const body = {userid: id, age: age.value, height: height.value, weight: weight.value , boxygen: boxygen.value, hdl: hdl.value, ldl:ldl.value, ast:ast.value, alt:ast.value, gfr:gfr.value}
  console.log(body)

  try {
    const response = await axiosInstance.post(`/users/${id}/healthindicators/`, body, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
        "Sessionid": Sessionid
      },
      withCredentials: true
    })
    if (response.status == 201) {
      toast.success("Health Stats updated", {
        position: toast.POSITION.TOP_CENTER
      })


    }
  }catch(err: unknown){

    toast.error("Error creating health stats", {
      position: toast.POSITION.TOP_CENTER
    })
  }

}


</script>

<template>
  <section class="w-full h-screen">
    <div class="w-2/3 mx-auto mt-20">
      <div class="breadcrumbs text-sm relative top-0 left-0">
        <ul>
          <li><a class="text-slate-800 text-xl no-underline" href="/">Home</a></li>
          <li><a class="text-slate-800 text-2xl no-underline" href="/">Dashboard</a></li>
          <li><a class="text-slate-800 text-2xl no-underline" href="/">Health Stats</a></li>
          <li></li>
        </ul>
      </div>
    </div>


    <div class="mt-10 flex flex-col justify-start items-center space-y-6">
    <form class="flex flex-col space-y-4" @submit="createHealthStat">
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">What is user's age?</span>
        </div>
        <input type="number" v-model="age" placeholder="Enter the age" min="0" max="100" step="1" class="input input-bordered w-full max-w-xs"  />
      </label>
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">What is user's height?(in cm)</span>
        </div>
        <input type="number" v-model="height" placeholder="Enter the height" min="100" max="250" step="1" class="input input-bordered w-full max-w-xs" />
      </label>
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">What is user's weight?</span>
        </div>
        <input type="number" v-model="weight" placeholder="Enter the weight" min="0" max="200" step="1" class="input input-bordered w-full max-w-xs" />
      </label>
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">What is user's blood oxygen level?</span>
        </div>
        <input type="number" v-model="boxygen" placeholder="Enter the Blood Oxygen Level" min="0" max="100" step="1" class="input input-bordered w-full max-w-xs" />
      </label>
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">What is user's HDL Cholesterol level?</span>
        </div>
        <input type="number" v-model="hdl" placeholder="Enter the HDL" min="0" max="100" step="1" class="input input-bordered w-full max-w-xs" />
      </label>
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">What is user's LDL Cholesterol level?</span>
        </div>
        <input type="number" v-model="ldl" placeholder="Enter the LDL" min="0" max="100" step="1" class="input input-bordered w-full max-w-xs" />
      </label>
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">What is user's ALT level</span>
        </div>
        <input type="number" v-model="alt" placeholder="Enter the ALT" min="0" max="100" step="1" class="input input-bordered w-full max-w-xs" />
      </label>
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">What is user's AST level</span>
        </div>
        <input type="number" v-model="ast" placeholder="Enter the AST" min="0" max="100" step="1" class="input input-bordered w-full max-w-xs" />
      </label>
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">What is user's GFR</span>
        </div>
        <input type="number" v-model="gfr" placeholder="Enter the GFR" min="0" max="100" step="1" class="input input-bordered w-full max-w-xs" />
      </label>

      <button type="submit" class="btn btn-primary">Update health Stats</button>


    </form>
    </div>
    </section>
</template>

<style scoped>

</style>