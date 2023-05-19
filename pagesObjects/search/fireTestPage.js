class SearchPage {
    elements={
        placeLabel:() => cy.get('#place'),
        findButton:() => cy.get('[id="btnfind"]'),
        latLogResult:() => cy.get('#latlngspan'),
        errorMsg:() =>cy.get('[style="color:red"]'),
        nodeCount:() => cy.get('[class="row"]').eq(0).children().children().its('length')
    };

    addPlace(value) {
        this.elements.placeLabel().type(value, {delay: 30}).should('have.value', value)
    };

    successValidation(value){
        this.elements.latLogResult().contains(value)
    };

    errorValidation(value){
        this.elements.errorMsg().contains(value)
    };

}
module.exports = new SearchPage();