import { test, expect } from '@playwright/test';

test.use({
  storageState: 'admin-auth.json',
});

test('Explore Posts Page', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/test');
  await expect(page.getByRole('heading', { name: 'Explore Clubs' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Create a Club' })).toBeVisible();
});
