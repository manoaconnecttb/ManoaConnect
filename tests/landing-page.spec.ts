import { test, expect } from '@playwright/test';

test.use({
  storageState: 'admin-auth.json',
});

test('Landing Page', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000');
  await expect(page.getByRole('heading', { name: 'Welcome to ManoaConnectTB' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Sign In To Get Started' })).toBeVisible();
});
