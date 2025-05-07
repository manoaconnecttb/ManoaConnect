import { test, expect } from '@playwright/test';

test.use({
  storageState: 'admin-auth.json',
});

test('Home Page', async ({ page }) => {
  await page.goto('http://localhost:3000/home');
  await expect(page.getByRole('heading', { name: 'Posts' })).toBeVisible();
});
