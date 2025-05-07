import { test, expect } from '@playwright/test';

test.use({
  storageState: 'admin-auth.json',
});

test('Admin Pages', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/admin');
  await expect(page.getByRole('heading', { name: 'Feedback' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Name' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Response' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'List Users Admin' })).toBeVisible();
  await expect(page.locator('text=john@foo.com')).toBeVisible();
  await expect(page.locator('text=admin@foo.com')).toBeVisible();
});
