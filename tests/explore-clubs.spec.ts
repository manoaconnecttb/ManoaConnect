import { test, expect } from '@playwright/test';

test.use({
  storageState: 'admin-auth.json',
});

test('Explore Clubs Page', async ({ page }) => {
  await page.goto('https://manoa-connect.vercel.app/Explore');
  await expect(page.getByRole('heading', { name: 'Explore Posts' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Create Post' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
});
