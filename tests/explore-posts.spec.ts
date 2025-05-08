import { test, expect } from '@playwright/test';

test.use({ storageState: 'admin-auth.json' });

test('Explore Posts Page', async ({ page }) => {
  await page.goto('http://localhost:3000/Explore');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('heading', { name: 'Explore Posts' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Welcome admin@foo.com' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Create Post' })).toBeVisible();
});
