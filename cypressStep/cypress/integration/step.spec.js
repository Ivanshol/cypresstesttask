// asset.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
import StepPageKeywordsTab from './page/StepPageKeywordsTab';
import StepPageParametersTab from './page/StepPageParametersTab';
import StepPageExecutionsTab from './page/StepPageExecutionsTab';
import StepPageSchedulerTab from './page/StepPageSchedulerTab';
import StepPageMain from './page/StepPageMain';

describe('Step page tabs test', function () {

    StepPageMain.goToPage();

    it('Should check the Keywords tab and wait for it to load', function (){ 
    StepPageKeywordsTab.checkKeywordsTab();
    });

    it('Should check the Parameters tab and wait for it to load', function (){ 
    StepPageParametersTab.checkParametersTab();
    });

    it('Should check the Executions tab and wait for it to load', function (){ 
    StepPageExecutionsTab.checkExecutionsTab();
    });

    it('Should check the Scheduler tab and wait for it to load', function (){ 
    StepPageSchedulerTab.checkSchedulerTab();
    });

}); 
