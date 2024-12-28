 const adminLogin = () =>{
    cy.fixture("admin.js").then((data) => {
        cy.intercept('POST', "https://healthtracker.up.railway.app/api/login",{
            statusCode: 200,
            body: data
        })
    }).as("loginReq")
    cy.fixture("users.js").then((data) => {
        cy.intercept('GET', "https://healthtracker.up.railway.app/api/users",{
            statusCode: 200,
            body: data
        })
    }).as("getUsers")
    cy.visit("/")
    cy.get('.hidden > .btn').trigger("click")
    cy.get(':nth-child(1) > .grow').type("healthadmin@hospital.com")
    cy.get(':nth-child(2) > .grow').type("user")
     cy.get('.py-10 > :nth-child(2) > .flex-col > .btn').click()
    //Intercept login post request and stub response
    cy.wait('@loginReq',{ timeout: 20000 }).then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
    });
    //Intercept users  request and stub response
    cy.wait('@getUsers',{ timeout: 20000 }).then((interception) => {
        expect(interception.response.statusCode).to.eq(200);

    })

}

describe("Test Admin Dashboard Function" ,()=>{

    beforeEach(() =>
    adminLogin())
    it("Test if the loggedAdmin is admin, gets admin dashboard", ()=>{
        adminLogin()
        cy.get('.space-y-6 > .text-3xl').should('contain', "admin") //Check for the admin user.in title
        cy.get('.d-flex > .btn').should('have.text','Logout') //Check if the button shows logout - Innidcates the user is logged iN

    })
    it("Test if clicking on the user goes to user Profile", () =>{
        cy.fixture("user.js").then((data) =>{
            cy.intercept('GET', "https://healthtracker.up.railway.app/api/users/100",{
                statusCode: 200,
                body: data
            })

        }).as("getAuser")

        cy.get(':nth-child(2) > tr > :nth-child(3) > .badge > a').click()
        cy.wait('@getAuser'  ,{timeout :20000}).then((interception)=>{
           expect(interception.response.statusCode).to.eq(200)
        })

    })
    it("Test if clicking the activities redirect to activities page",()=>{
        cy.fixture("activities.js").then(data =>{
            cy.intercept('GET', "https://healthtracker.up.railway.app/api/users/100/activities",{
                statusCode: 200,
                body: data
            })
        }).as("activities")
        cy.get(':nth-child(2) > tr > :nth-child(5) > .btn > a').click()//click on activities

        cy.wait('@activities'  ,{timeout :20000}).then((interception)=>{
            expect(interception.response.statusCode).to.eq(200)
        })

    })
    it.only("Test if clicking the activities redirect to activities page",()=>{

        cy.get(':nth-child(2) > tr > :nth-child(6) > .btn > a').click({force:true})
        cy.get('.flex > .btn').should('have.text', 'Update health Stats')


    })


})