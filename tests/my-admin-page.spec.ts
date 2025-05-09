import { test, expect } from '@playwright/test';

test.use({ storageState: 'admin-auth.json' });

test('Admin Pages', async ({ page }) => {
  await page.goto('https://manoa-connect.vercel.app/admin');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('networkidle');

  await expect(page.locator('h1', { hasText: 'Feedback' })).toBeVisible();
  await expect(page.locator('h1', { hasText: 'List Users Admin' })).toBeVisible();
  await expect(page.locator('h1', { hasText: 'Posts' })).toBeVisible();
  await expect(page.locator('h1', { hasText: 'Clubs' })).toBeVisible();

  await expect(page.locator('thead >> text=Name')).toBeVisible();
  await expect(page.locator('thead >> text=Response')).toBeVisible();
  await expect(page.locator('thead >> text=Email')).toBeVisible();
  await expect(page.locator('thead >> text=Role')).toBeVisible();
});
