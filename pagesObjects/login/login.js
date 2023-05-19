class login {
    elements={
        userLocator:() => cy.get('[id="email"]'),
        passwordLocator:() => cy.get('[id="password1"]'),
        loginBtn: ()=> cy.get('[class="button"]'),
    };

    visit() {
        //open the login page
        cy.visit('https://www.latlong.net/user/login')
    }

}
module.exports = new login();