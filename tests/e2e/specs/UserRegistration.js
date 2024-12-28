describe("Test the registration Page",() =>{


    it("Test if the registration on success redirects to home page",() =>{
        cy.fixture("success.js").then((data) => {
            cy.intercept('POST', "https://healthtracker.up.railway.app/api/users",{
                statusCode: 201,
                body: data
            })
        }).as("userreg")
        cy.visit("/")
        cy.get('.hidden > .btn').click()
        cy.get('.mt-10 > .btn').click({force:true})

        cy.get('div > .flex-col > :nth-child(1)').type("user2")
        cy.get('div > .flex-col > :nth-child(2)').type("user@gmail.com")
        cy.get('div > .flex-col > :nth-child(3)').type("password")
        cy.get('div > .flex-col > :nth-child(4)').select("user")
        cy.get('.btn-primary').click()
        cy.wait('@userreg',{ timeout: 20000 }).then((interception) => {
            expect(interception.response.statusCode).to.eq(201);
        })
        cy.get('.hidden > .btn').should('have.text','Login')
    })

    it("Test if the back button works",()=>{
        cy.visit("/")
        cy.get('.hidden > .btn').click()
        cy.get('.mt-10 > .btn').click({force:true})
        cy.get('.btn-warning').click()
        cy.get('.hidden > .btn').should('have.text','Login')


    })

})