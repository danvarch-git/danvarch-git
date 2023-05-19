declare namespace Cypress {
    interface Chainable {
         /**
              * Custom command that will be used to login into the app
              * @example cy.Applogin();
              * @file //support/commands.js
         */
         Applogin(): void

          /**
               * Custom command that helps to execute a search by entering a place
               * @param {string} tag is the type of scenario, negative or positive
               * @param {string} assertion expected assertion for positive scenario
               * @param {string} errorMsg expected error message for negative scenario
               * @example cy.loginByUI('admin@mf.com','arst@dm1n');
               * @file //support/commands.js
          */
          resultValidation(tag: string, assertion: string, errorMsg: string): void
    }
}