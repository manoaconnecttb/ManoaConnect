import { test, expect } from '@playwright/test';

test.use({ storageState: 'admin-auth.json' });

test('Make Post', async ({ page }) => {
  await page.goto('https://manoa-connect.vercel.app/post');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('heading', { name: 'New Post' })).toBeVisible();
  await expect(page.locator('input[name="title"]')).toBeVisible();
  await expect(page.locator('input[name="image"]')).toBeVisible();
  await expect(page.locator('input[name="content"]')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
});
