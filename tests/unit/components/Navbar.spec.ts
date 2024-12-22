import {createPinia, setActivePinia} from "pinia";
import {mount} from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";
import {ModalStore, useLoginStore} from "@/store";

describe("Test the navbar component", () => {


    beforeEach(() =>{

        setActivePinia(createPinia())
    })

    it("Test if the navbar has a login and logout buttons",() =>{

        const navbar = mount(Navbar)
        const buttons = navbar.findAll("button")
        buttons.some(button => button.html().includes("Login"))
        buttons.some(button => button.html().includes("Logout"))



    })
    it("Test if clicking the login button triigers isModalOpen",async  ()=>{
        const navbar =  mount(Navbar)
        const modalstore = ModalStore()
        const prevModalOpen = modalstore.isModalOpen
        const buttons =   navbar.findAll("button")
        const  loginButton =buttons.find(button  => button.text().includes("Login"))
        expect(loginButton?.exists())
        await loginButton?.trigger("click")
        const currentModalOpen = modalstore.isModalOpen
        expect(currentModalOpen).toBe(!prevModalOpen)
    })

})