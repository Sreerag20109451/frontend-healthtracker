const activitiesView = () =>{
    cy.fixture("normaluser.js").then((data) => {
        cy.intercept('POST', "https://healthtracker.up.railway.app/api/login",{
            statusCode: 200,
            body: data
        })
    }).as("loginReq")
    cy.fixture("activities.js").then((data) => {
        cy.intercept('GET', "https://healthtracker.up.railway.app/api/users/100/activities",{
            statusCode: 200,
            body: data
        })
    }).as("getActivities")
    cy.visit("/")
    cy.get('.hidden > .btn').trigger("click")
    cy.get(':nth-child(1) > .grow').type("healthadmin@hospital.com")
    cy.get(':nth-child(2) > .grow').type("user")
    cy.get('.py-10 > :nth-child(2) > .flex-col > .btn').click()
    //Intercept login post request and stub response
    cy.wait('@loginReq',{ timeout: 20000 }).then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
    });
    cy.get('.card-actions > .btn').click()
    //Intercept users  request and stub response
    cy.wait('@getActivities',{ timeout: 20000 }).then((interception) => {
        expect(interception.response.statusCode).to.eq(200);

    })


}

describe("Test the activities operations" ,() =>{

    beforeEach(()=>{
        activitiesView()
    })

    it("Test if the delete activity works",()=>{
        cy.fixture("activities.js").then((data) => {
            cy.intercept('DELETE', "https://healthtracker.up.railway.app/api/users/100/activities/1",{
                statusCode: 200,
                body: data
            })
        }).as("deleteActivity")


        cy.get(':nth-child(7) > .btn').click()

            cy.wait('@deleteActivity',{ timeout: 20000 }).then((interception) => {
                expect(interception.response.statusCode).to.eq(200);

            })
    })
    it.only("Test if the create activity works",()=>{
        cy.fixture("activities.js").then((data) => {
            cy.intercept('POST', "https://healthtracker.up.railway.app/api/users/100/activities",{
                statusCode: 200,
                body: data
            })
        }).as("addAct")


        cy.get('.select').select("running")
        cy.get(':nth-child(2) > .input').type("10")
        cy.get(':nth-child(3) > .input').invoke('val', '2').trigger('change');
        cy.get(':nth-child(3) > .input').invoke('val', '2024-12-28T10:00').trigger('change');
        cy.get('.btn > a').click()
        cy.wait('@addAct',{ timeout: 20000 }).then((interception) => {
            expect(interception.response.statusCode).to.eq(200);

        })


        })


})
