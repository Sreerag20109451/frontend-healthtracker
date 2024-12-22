import {mount} from "@vue/test-utils";
import ActivitiesCard from "@/components/ActivitiesCard.vue";

describe("Test activities card component",()=>{

    const actCard = mount(ActivitiesCard)

    it('Test if the component mounts', ()=> {
        expect(actCard.exists()).toBe(true)

    })

    it("Test if the component has appropriate heading" ,() => {

        const html = actCard.html()
        expect(html).toContain("Manage your Activities")

    })

    it('Test if the component has show activities buton', () => {
        const buttons = actCard.findAll("button")
        const isThereShowActivitiesButton =  buttons.some(button => button.text().includes("Show Activities"))
        expect(isThereShowActivitiesButton).toBe(true)
    })


})