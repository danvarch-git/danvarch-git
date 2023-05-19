// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const pageSearch = require('../pagesObjects/search/fireTestPage.js');
const pageLogin = require('../pagesObjects/login/login.js');

Cypress.Commands.add('Applogin', () =>{//Custom command used to login into the app
  cy.session('danvarch@gmail.com', () => {
    pageLogin.visit();
    cy.get('@data').then(credentials=>{ //call fixture to use user credetendial
      pageLogin.elements.userLocator().type(credentials.username);
      pageLogin.elements.passwordLocator().type(credentials.password);
      pageLogin.elements.loginBtn().click();
    })
    

  })
})

Cypress.Commands.add('resultValidation', (tag,assertion,errorMsg) =>{
  cy.waitUntil(()=> pageSearch.elements.nodeCount().then((val) => val>5),{
    errorMsg: 'No results displayed',
    timeout: 120000,
    interval: 3000
  })
  if(tag=='positive'){//validates latitude and long
    pageSearch.successValidation(assertion)
  }else{
    pageSearch.errorValidation(errorMsg)
  }
})