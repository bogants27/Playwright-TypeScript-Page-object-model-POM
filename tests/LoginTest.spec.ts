import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { defineConfig, devices } from '@playwright/test';

test.describe('Login functionality', () => {

  test('Scenario B.1: Authentication (Negative)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    //Negative Scenario
    await loginPage.navigate();
    await expect(loginPage.loginTitle).toHaveText('Product Manager');
    await loginPage.login('invalidUser','invalidPassword');
    await expect(loginPage.invalidMessage).toHaveText('Invalid username or password');
    
  });

  test('Scenario B.2: Authentication (Positive)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const username = process.env.TEST_USERNAME;
    const password = process.env.TEST_PASSWORD;
    
    //Positive Scenario
    await loginPage.navigate();
    await loginPage.login(username,password);
    await expect(page).toHaveURL(/index\.html/);
    await expect(productPage.productTitle).toHaveText('Product Manager (VanillaJS)');
    
  });


});