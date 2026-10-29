
import { type Locator, type Page } from '@playwright/test';

export class RegisterPage {
  private readonly page: Page;

  readonly usernameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly confPasswordInput: Locator;
  readonly registerButton: Locator;
  

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.locator('#reg-password');
    this.confPasswordInput = page.locator('#reg-confirm-password');    
    this.registerButton = page.getByRole('button', {
      name: 'Register'
    });
  }


  async register(
    usertext: string,
    emailText: string,
    passwordText: string,
    confPasswordText: string,
  ): Promise<void> {
    await this.usernameInput.fill(usertext);
    await this.emailInput.fill(emailText + '@softwaremind.com');
    await this.passwordInput.fill(passwordText);
    await this.confPasswordInput.fill(confPasswordText);
    await this.registerButton.click();



}   

}
