
describe("Test Basic Functionalities" , () =>{
    it("Visit home page", () =>{
        cy.visit("/")
        cy.get('h1').contains("Welcome")
    })

    it("Test if logging in using a normal user work" , () =>{

        cy.visit("/")
        cy.get('.hidden > .btn').trigger("click")
        cy.get(':nth-child(1) > .grow').type("20109451@mail.wit.ie")
        cy.get(':nth-child(2) > .grow').type("test")
        cy.get('.flex-col > .btn').click({force:true})
        cy.wait(5000)
        cy.get('.space-y-6 > .text-3xl').should('contain', "Sreerag")
        cy.get('.d-flex > .btn').click({ force: true })
    })
    it("Test if logging in using an admin user work" , () =>{

        cy.visit("/")
        cy.get('.hidden > .btn').trigger("click")
        cy.get(':nth-child(1) > .grow').type("healthadmin@hospital.com")
        cy.get(':nth-child(2) > .grow').type("user")
        cy.get('.flex-col > .btn').click({force:true})
        cy.wait(5000)
        cy.get('.space-y-6 > .text-3xl').should('contain', "admin")
        cy.get('.d-flex > .btn').click({ force: true })
    })



})

