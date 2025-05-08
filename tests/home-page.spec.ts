import { test, expect } from '@playwright/test';

test.use({ storageState: 'admin-auth.json' });

test('Home Page', async ({ page }) => {
  await page.goto('https://manoa-connect.vercel.app/home');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('networkidle');

  await expect(page.getByRole('heading', { name: 'Posts' })).toBeVisible();
});
