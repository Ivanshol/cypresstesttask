class StepPageKeywordsTab{
    
    checkKeywordsTab(){
        cy.get('li[ng-class]').eq(1).click()
        cy.get('[ng-controller="FunctionPackageActionsCtrl"]').should('be.visible');
    }

}

export default new StepPageKeywordsTab()