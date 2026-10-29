
import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly registerLink: Locator;
  readonly loginTitle: Locator;
  readonly invalidMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    //this.usernameInput = page.locator('#username');
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', {name: 'Sign In' });
    this.registerLink = page.getByRole('link', {name: 'Register here' });
    this.loginTitle = page.getByRole('heading', {name: 'Product Manager' });
    this.invalidMessage = page.locator('#login-alert');
  }

  async navigate(): Promise<void> {
    await this.page.goto('/login.html');
  }

  async login(
    username: string,
    password: string
  ): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
  

  async goRegister(
  ): Promise<void> {
    await this.registerLink.click();
  }


}
