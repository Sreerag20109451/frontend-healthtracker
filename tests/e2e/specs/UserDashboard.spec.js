 const userLogin = () =>{
    cy.fixture("normaluser.js").then((data) => {
        cy.intercept('POST', "https://healthtracker.up.railway.app/api/login",{
            statusCode: 200,
            body: data
        })
    }).as("loginReq")
    cy.visit("/")
    cy.get('.hidden > .btn').trigger("click")
    cy.get(':nth-child(1) > .grow').type("healthadmin@hospital.com")
    cy.get(':nth-child(2) > .grow').type("user")
     cy.get('.py-10 > :nth-child(2) > .flex-col > .btn').click({force:true})

    //Intercept login post request and stub response
    cy.wait('@loginReq',{ timeout: 20000 }).then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
    });

}
describe("Test the Normal User dashboard",() =>{
    beforeEach(()=> {
        userLogin()
    })
    it("Test if the user dashboard loads",() => {
        cy.get(':nth-child(1) > .card-body > .card-actions > form > .btn').should('have.text', "Show Profile")
        cy.get('.card-actions > .btn').should('have.text',"Show Activities")
        cy.get(':nth-child(3) > .card-body > .card-actions > form > .btn').should('have.text', "Generate Report")
    })
    it("Test if On Clicking Profile, it redirects to profile",()=>{
        cy.fixture("user.js").then((data) => {
            cy.intercept('GET', "https://healthtracker.up.railway.app/api/users/100",{
                statusCode: 200,
                body: data
            })
        }).as("getUser")

        cy.get(':nth-child(1) > .card-body > .card-actions > form > .btn').click()

        //Intercept users  request and stub response
        cy.wait('@getUser',{ timeout: 20000 }).then((interception) => {
            expect(interception.response.statusCode).to.eq(200);

        })

    })
    it("Test if On Clicking Profile, it redirects to profile",()=>{
        cy.fixture("activities.js").then((data) => {
            cy.intercept('GET', "https://healthtracker.up.railway.app/api/users/100/activities",{
                statusCode: 200,
                body: data
            })
        }).as("getActivities")

        cy.get('.card-actions > .btn').click()

        //Intercept users  request and stub response
        cy.wait('@getActivities',{ timeout: 20000 }).then((interception) => {
            expect(interception.response.statusCode).to.eq(200);

        })

    })
    it("Test if On Clicking Generate Report, it fetches Report",()=>{
        cy.fixture("Report.js").then((data) => {
            cy.intercept('GET', "https://healthtracker.up.railway.app/api/users/100/details",{
                statusCode: 200,
                body: data
            })
        }).as("getReport")

        cy.get(':nth-child(3) > .card-body > .card-actions > form > .btn').click()

        //Intercept users  request and stub response
        cy.wait('@getReport',{ timeout: 20000 }).then((interception) => {
            expect(interception.response.statusCode).to.eq(200);

        })

    })

})