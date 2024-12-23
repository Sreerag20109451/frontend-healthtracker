<script setup lang="ts">
import {useRoute} from "vue-router";
import {useLoginStore} from "@/store";
import {useQuery} from "@tanstack/vue-query";
import {axiosInstance} from "@/utils/axiosInstance";
import {toast} from "vue3-toastify";
import {ref} from "vue";
import router from "@/router";

const route = useRoute()
const {id} = route.params
const Sessionid = localStorage.getItem("sessionId")
let email = ref<String>("")
let name = ref<String>("")

const { isPending, isError, data, error } = useQuery({ queryKey: ['userdeets'], queryFn: async () =>
  {
    try {
      const response = await axiosInstance.get(`/users/${id}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
          "Sessionid": Sessionid
        },
        withCredentials: true
      })
      if (response.status == 200) {
        if(response.data.data){
          email.value = response.data.data.email
          name.value = response.data.data.name
        }
        return response.data.data
      }
    }
    catch (e :unknown){
      toast.error("Updation error" ,{
        position: toast.POSITION.TOP_CENTER
      })
    }
  }
})

const editUser = async (e :Event) => {
  e.preventDefault()
  const body = {name: name.value, email : email.value }
  try{
    const response =  await axiosInstance.put(`/users/${id}`,body)
    if(response.status  == 200){
      router.push(`/users/${id}`)
    }
  }
  catch(e: unknown){



  }


}


</script>
<template>
<section class="flex h-screen w-full mx-auto my-auto">

  <div class=" flex flex-col w-1/5 h-1/2 mx-auto my-auto">
    <div v-if="isPending">
      <span class="loading loading-spinner loading-lg"></span>
    </div>
    <form v-if="data" class="flex flex-col space-y-4" onsubmit="editUser">
      <label class="input input-bordered flex items-center gap-2">
        Name
        <input type="text" class="grow"  :placeholder="name.value"   v-model="name" />
      </label>
      <label class="input input-bordered flex items-center gap-2">
        Email
        <input type="text" class="grow" :placeholder="email.value" v-model="email"/>
      </label>
      <button class="btn btn-accent"><a :href="`/users/${data.id}/edit`">Edit</a></button>
    </form>


  </div>



</section>
</template>

<style scoped>

</style>