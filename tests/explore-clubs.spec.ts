import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://manoa-connect.vercel.app/auth/signin');
  await page.locator('input[name="email"]').fill('admin@foo.com');
  await page.locator('input[name="password"]').fill('changeme');
  await Promise.all([
    page.getByRole('button', { name: 'Sign In' }).click(),
  ]);
  await expect(page).toHaveURL('https://manoa-connect.vercel.app/home');
});
