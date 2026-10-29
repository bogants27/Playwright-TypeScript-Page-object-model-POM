
import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env.BASE_URL;
const username = process.env.TEST_USERNAME;
const password = process.env.TEST_PASSWORD;


if (!baseURL) {
  throw new Error('Missing BASE_URL in .env');
}

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

  use: {
    baseURL,
    channel: 'chrome',
    headless: false,
    viewport: null,
    launchOptions: { args: ['--start-maximized'] },
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  }

  
});
