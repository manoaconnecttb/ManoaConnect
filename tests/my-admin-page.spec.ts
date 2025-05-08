import { test, expect } from '@playwright/test';

test.use({ storageState: 'admin-auth.json' });

test('Admin Pages', async ({ page }) => {
  await page.goto('http://localhost:3000/admin');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('networkidle');
  await expect(page.locator('text=Name')).toBeVisible();
  await expect(page.locator('text=Response')).toBeVisible();
  await expect(page.locator('text=List Users Admin')).toBeVisible();
  await expect(page.locator('text=Email')).toBeVisible();
  await expect(page.locator('text=Role')).toBeVisible();
});
