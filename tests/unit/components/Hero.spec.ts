import {createPinia, setActivePinia} from "pinia";
import {mount} from "@vue/test-utils";
import Hero from "@/components/Hero.vue";
import { ModalStore } from "@/store";


describe('Test the hero component',() =>{

    beforeEach(()=>{
        setActivePinia(createPinia())
    })

    it("The hero component has Welcome to health tracker", () =>{
        const heroComponent = mount(Hero)
        const h1 = heroComponent.find("h1")
        expect(h1.text()).toContain("Welcome to Health Tracker!")
    })
    it("On clicking the get started button, the isModal open state should be set true",async () =>{

        const heroComponent = mount(Hero)
        const modalStore = ModalStore()
        const prevModalOpen = modalStore.isModalOpen
        const button = heroComponent.find("button")
        await button.trigger("click")
        const currentModalOpen = modalStore.isModalOpen
        expect(currentModalOpen).toBe(!prevModalOpen)


    })


} )