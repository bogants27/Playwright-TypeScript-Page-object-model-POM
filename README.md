Overview

This Web UI automation project was developed using playwright as a framework and typeScript as programming languaje.
On this project I implemented the page object model patern which is a design pattern in test automation where each screen or page of a web or 
mobile application is represented as an independent object-oriented class. The purpose is the separte the UI interaction from test logic.

Therefore, you wil find the page object in the "pages" foder
   - LoginPage.ts
   - RegisterPage.ts
   - ProductPage.ts
   
Test logic files are in "test" folder
   - LoginTest.spec.ts
   - RegisterTest.spec.ts
   - ProductTest.spec.ts

Instructions

node --version -> v24.19.0
npm --version playwright -> 11.17.0

- Open visual studio code or your IDE and open the folder : playwright-pom-framework
- Open a console in above folder route and run: npm init playwright@latest
   Running the test in secuence 
- In the console run the following command in order to run all the test cases : npx playwright test --headed. This command will
execute the test on the browser
- Afrer running the test, put this command in the console in order to open a .HTML report:  npx playwright show-report  
   
   Running in Parallel 

- In the config file playwright.config.ts

change the secuense config: 

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
  
  
To parallel config 

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 3,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],


- In the console run the following command in order to run all the test cases : npx playwright test --headed. This command will
execute the test on the browser
- Afrer running the test, put this command in the console in order to open a .HTML report:  npx playwright show-report  