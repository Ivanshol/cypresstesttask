class StepPageMain{

    goToPage(){
        beforeEach(() => {
            cy.visit("http://localhost:8080/"); 
            cy.get('[type="submit"]').click();
            });
    }
    

}

export default new StepPageMain()