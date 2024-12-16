import {defineStore} from "pinia";
import {getUserFromLocalStorage} from "@/utils/utils";


export  const useLoginStore =  defineStore(
    "loginStore",{
        state : () => (
            {isLoggedIn :   getUserFromLocalStorage()? true : false , user : getUserFromLocalStorage() || null }
        ),
        getters : {
           isAdmin : (state) => {
               return state.user?.role === "admin"
           }
        },
        actions: {
            toggleLogin(){
                this.isLoggedIn = !this.isLoggedIn
            },
            setUser()  {
                this.user = getUserFromLocalStorage()
            }
        }
    }
    )

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