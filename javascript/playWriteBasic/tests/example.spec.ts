import { test, expect } from '@playwright/test'

test('Title', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.getByRole('textbox', { name: 'username' }).click();
  await page.locator('[data-test="username"]').fill('abc');


});