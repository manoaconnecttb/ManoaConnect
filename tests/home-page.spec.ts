import { test, expect } from '@playwright/test';

test.use({
  storageState: 'admin-auth.json',
});

test('Admin Pages', async ({ page }) => {
  await page.goto('http://localhost:3000/home');
  await expect(page.getByRole('heading', { name: 'Posts' })).toBeVisible();
});
