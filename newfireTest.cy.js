/// <reference types="cypress"/>
import 'cypress-wait-until';
const data = require("../fixtures/inputData.json");
const pageSearch = require('../pagesObjects/search/fireTestPage.js');
describe('template spec', () => {

  beforeEach(() => {
    cy.fixture('userCredentials').as("data");//Alias created to call input data in login custom command
    cy.Applogin();//Login command
    cy.visit('/');

  })
  afterEach(function () {
    cy.clearLocalStorage();
  })

  data.forEach((data)=>{ //Used to validate existing input data and run a scenario for each existing data node
    it(data.tittle + " | " + data.description+data.place, function () {
      pageSearch.addPlace(data.place);
      pageSearch.elements.findButton().click();
      cy.resultValidation(data.tag,data.assertion,data.errorMsg);
    })
  })
})