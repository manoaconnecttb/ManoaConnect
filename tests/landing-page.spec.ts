import { test, expect } from '@playwright/test';

test.use({ storageState: 'admin-auth.json' });

test('Landing Page', async ({ page }) => {
  await page.goto('https://manoa-connect.vercel.app/');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('heading', { name: 'Welcome To ManoaConnectTB' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sign In To Get Started' })).toBeVisible();
});
