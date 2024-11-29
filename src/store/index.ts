import {defineStore} from "pinia";
import {getUserFromLocalStorage} from "@/utils/utils";

export  const useLoginStore =  defineStore(
    "loginStore",{
        state : () => (
            {isLoggedIn : false , loginModal : "login"}
        ),
        actions: {
            toggleLogin(){
                this.isLoggedIn = !this.isLoggedIn
            }

        }
    }
    )
export const useUserStore = defineStore("userStore",{
    state: () => {
        return {user  : null as User | null, isAdmin: false, isSameUser: false}
    },
    getters: {
        getUserDetails(state) {
            if(state.user) return state.user
            return null
        },
        setAdmin(state){
          if(state.user && state.user.role == "admin") state.isAdmin = true

        }
    },
    actions : {
        setUser() {
            const user : User | null = getUserFromLocalStorage()
            if(user) this.$state.user = user

        }


    }
})
export  const ModalStore = defineStore("modalStore", {
    state : () =>{
        return {isModalOpen : false}
    },
    actions: {
        toggleLoginModal()  {
            this.isModalOpen = !this.isModalOpen
        }
    }

})