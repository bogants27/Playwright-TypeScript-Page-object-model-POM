
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ProductPage } from '../pages/ProductPage';
import { defineConfig, devices } from '@playwright/test';

/*
test.describe('Register functionality', () => {

  test('Scenario A: User Registration (Happy Path)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const registerPage = new RegisterPage(page);
    const randomUser = Math.random().toString(36).substring(2, 10);
    const randomEmail = Math.random().toString(36).substring(2, 10);

    await loginPage.navigate();
    await loginPage.goRegister();
    await registerPage.register(randomUser,randomEmail,'password123','password123');
    await expect(loginPage.loginTitle).toHaveText('Product Manager');
    await expect(page).toHaveURL(/login\.html/);
    //await page.pause();

    //await expect(page).toHaveURL(/inventory\.html/);
    //await expect(inventoryPage.pageTitle).toHaveText('Products');
    //await expect(inventoryPage.inventoryItems).toHaveCount(6);
  });


  test('Scenario B: Authentication (Negative & Positive)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const username = process.env.TEST_USERNAME;
    const password = process.env.TEST_PASSWORD;
    
    //Negative Scenario
    await loginPage.navigate();
    await expect(loginPage.loginTitle).toHaveText('Product Manager');
    await loginPage.login('invalidUser','invalidPassword');
    await expect(loginPage.invalidMessage).toHaveText('Invalid username or password');

    //Positive Scenario
    await loginPage.navigate();
    await loginPage.login(username,password);
    await expect(loginPage.loginTitle).toHaveText('Product Manager');
    await expect(page).toHaveURL(/login\.html/);
    
    //await page.pause();

    //await expect(page).toHaveURL(/inventory\.html/);
    //await expect(inventoryPage.pageTitle).toHaveText('Products');
    //await expect(inventoryPage.inventoryItems).toHaveCount(6);
  });


    test('Scenario C: Product Management (CRUD Flow)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const randomID = Math.random().toString(36).substring(2, 10);
    const username = process.env.TEST_USERNAME;
    const password = process.env.TEST_PASSWORD;
    let   productName = 'Automation Laptop' + '[' + randomID +']'
    //Positive Scenario
    await loginPage.navigate();
    await loginPage.login(username,password);
    await expect(productPage.productTitle).toHaveText('Product Manager (VanillaJS)');
    await productPage.fillForm(productName,'sku3','1500');
    await productPage.filterCategory('Electronics');
    await productPage.verifyProductAdded(productName,page);
    
    await page.pause();

    //await expect(page).toHaveURL(/login\.html/);
    //await expect(inventoryPage.pageTitle).toHaveText('Products');
    //await expect(inventoryPage.inventoryItems).toHaveCount(6);
  });




});*/
