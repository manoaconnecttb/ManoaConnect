import { test, expect } from '@playwright/test';

test.use({
  storageState: 'admin-auth.json',
});

test('Admin Pages', async ({ page }) => {
  await page.goto('http://localhost:3000/Explore');
  await expect(page.getByRole('heading', { name: 'Explore Posts' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Create Post' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
});
