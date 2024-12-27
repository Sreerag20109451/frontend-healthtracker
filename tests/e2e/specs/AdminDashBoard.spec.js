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
    cy.get('.flex-col > .btn').click({force:true})

    //Intercept login post request and stub response
    cy.wait('@loginReq',{ timeout: 20000 }).then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
    });
    //Intercept users  request and stub response
    cy.wait('@getUsers',{ timeout: 20000 }).then((interception) => {
        expect(interception.response.statusCode).to.eq(200);

    })
    cy.get('.space-y-6 > .text-3xl').should('contain', "admin") //Check for the admin user.in title
    cy.get('.d-flex > .btn').should('have.text','Logout') //Check if the button shows logout - Innidcates the user is logged iN

}


describe("Test Admin Dashboard Function" ,()=>{

    beforeEach(() =>
    adminLogin())
    it("Test if the loggedAdmin is admin, gets admin dashboard", ()=>{

        adminLogin()
    })
    it("Testif clicking on the user goes to user Profile", () =>{
        cy.fixture("user.js").then((data) =>{

        })

        cy.get(':nth-child(2) > tr > :nth-child(3) > .badge > a').click()

    })


})