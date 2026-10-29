import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { defineConfig, devices } from '@playwright/test';


test.describe('Register functionality', () => {

  test('Scenario A: User Registration (Happy Path)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const registerPage = new RegisterPage(page);
    const randomUser = Math.random().toString(36).substring(2, 10);
    const randomEmail = Math.random().toString(36).substring(2, 10);

    await loginPage.navigate();
    await loginPage.goRegister();
    await registerPage.register(randomUser,randomEmail,'password123','password123');
    await expect(page).toHaveURL(/login\.html/);
    await expect(loginPage.loginTitle).toHaveText('Product Manager');
    
  });


  });