 const profileView = () =>{
    cy.fixture("normaluser.js").then((data) => {
        cy.intercept('POST', "https://healthtracker.up.railway.app/api/login",{
            statusCode: 200,
            body: data
        })
    }).as("loginReq")
     cy.fixture("user.js").then((data) => {
         cy.intercept('GET', "https://healthtracker.up.railway.app/api/users/100",{
             statusCode: 200,
             body: data
         })
     }).as("getUser")

     cy.visit("/")
    cy.get('.hidden > .btn').trigger("click")
    cy.get(':nth-child(1) > .grow').type("healthadmin@hospital.com")
    cy.get(':nth-child(2) > .grow').type("user")
     cy.get('.py-10 > :nth-child(2) > .flex-col > .btn').click({force:true})

    //Intercept login post request and stub response
    cy.wait('@loginReq',{ timeout: 20000 }).then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
    });

     cy.get(':nth-child(1) > .card-body > .card-actions > form > .btn').click()

     //Intercept users  request and stub response
     cy.wait('@getUser',{ timeout: 20000 }).then((interception) => {
         expect(interception.response.statusCode).to.eq(200);

     })


 }

 describe("Test the profile operations",() =>{
     beforeEach(()=>{

         profileView()
     })

     it('Test the sucessful redirection of edit operation', () => {
         cy.fixture("user.js").then((data) => {
             cy.intercept('PUT', "https://healthtracker.up.railway.app/api/users/100",{
                 statusCode: 200,
                 body: data
             })
         }).as("getUser")


         cy.get('.btn-accent > a').click({force:true})
         cy.wait('@getUser',{ timeout: 20000 }).then((interception) => {
             expect(interception.response.statusCode).to.eq(200);

         })
         cy.get('.flex-col > .btn').click({force:true})
         cy.wait('@getUser',{ timeout: 20000 }).then((interception) => {
             expect(interception.response.statusCode).to.eq(200);

         })
         cy.get('.btn-accent > a').should('have.text', "Edit")


     });
     it("On deletion, response get message and it logouts automatically and redirect to home",()=>{

         cy.fixture("deletion.js").then((data) => {
             cy.intercept('DELETE', "https://healthtracker.up.railway.app/api/users/100",{
                 statusCode: 200,
                 body: data
             })
         }).as("deleteUser")

         cy.get('form > .btn > a').click()
         cy.wait('@deleteUser',{ timeout: 20000 }).then((interception) => {
             expect(interception.response.statusCode).to.eq(200);

         })
         cy.get('.hidden > .btn').should('have.text','Login')

     })
 })