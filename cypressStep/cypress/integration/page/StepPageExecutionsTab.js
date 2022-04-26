class StepPageExecutionsTab{

    checkExecutionsTab(){
        cy.get('li[ng-class]').eq(3).click()
        cy.get('[class="ng-binding"]').eq(4).should('be.visible');
    }

}

export default new StepPageExecutionsTab()