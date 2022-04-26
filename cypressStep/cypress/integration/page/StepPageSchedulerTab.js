class StepPageSchedulerTab{

    checkSchedulerTab(){
        cy.get('li[ng-class]').eq(4).click()
        cy.get('[ng-click="addSchedulerEntry()"]').should('be.visible');
    }

}

export default new StepPageSchedulerTab()