class StepPageParametersTab{

    checkParametersTab(){
        cy.get('li[ng-class]').eq(2).click()
        cy.get('[class="btn btn-success"]').should('be.visible');
    }

}

export default new StepPageParametersTab()