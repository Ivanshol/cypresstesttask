STEP.exense testing with cypress

Details:

STEP is a unified platform for software automation 
that allows you to make the most out of automation artifacts while getting rid of specific tools.
In this project we can observe the automated testing of the STEP page tabs. The test signs in the STEP before testing each tab.
After clicking on a tab link it checks the visibility of the element that must be present on the page
to verify the tab is loaded

Prerequisites:

Install STEP.exense: https://step.exense.ch/knowledgebase/3.18/getting-started/quick-setup/
Install NodeJs: https://nodejs.org/en/about/releases/
Install JDK 11: https://www.oracle.com/cis/java/technologies/javase/jdk11-archive-downloads.html
Install MongoDB: https://www.mongodb.com/docs/manual/installation/


Before running the test:

Create a basic MongoDB Instance, folook here for the information on how to do that: https://medium.com/stackfame/run-mongodb-as-a-service-in-windows-b0acd3a4b712

Open the startController.bat file from the step controller folder with any text editor.
After that, set up the JAVA_PATH variable according to the example given in the bat file.

Set up JAVA_HOME environment variable, look here for the information on how to do that: https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html

To install cypress, open your project folder with your IDE and run this command:
npm install cypress --save-dev


How to run the test:

Open the startController.bat file from step controller folder you downloaded when installing step.exense

Open the project folder with the IDE of your choice

In the terminal type 
./node_modules/.bin/cypress open 
and press enter.

After some time the cypress will open and you will see the test list

In Cypress, open "step.spec.js" by left clicking, you will see the test running
After the tests are passed, left-click on a scenario to open logs

By hovering your mouse over assertions in the executions logs you can visually verify the validity of the test by
looking at a snapshot of Cypress in that moment.

Support

If you have any questions, please write to: sholomitskyiv@gmail.com
