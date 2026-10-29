import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ProductPage } from '../pages/ProductPage';
import { defineConfig, devices } from '@playwright/test';

test.describe('Product Management functionality', () => {


test('Scenario C: Create/Search/Delete Product', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const randomID = Math.random().toString(36).substring(2, 10);
    let   productName = 'Automation Laptop' + '[' + randomID +']'
    const username = process.env.TEST_USERNAME;
    const password = process.env.TEST_PASSWORD;
    
    await loginPage.navigate();
    await loginPage.login(username,password);
    await expect(page).toHaveURL(/index\.html/);
    await expect(productPage.productTitle).toHaveText('Product Manager (VanillaJS)');
    await productPage.fillForm(productName,'sku3','1500');
    await productPage.filterCategory('Electronics');
    await productPage.verifyProductAdded(productName,page);
    await productPage.deleteProduct(productName,page);

 });


});