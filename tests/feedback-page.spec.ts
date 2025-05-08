import { test, expect } from '@playwright/test';

test.use({ storageState: 'admin-auth.json' });

test('Feedback Page', async ({ page }) => {
  await page.goto('http://localhost:3000/feedback');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('networkidle');
  await expect(page.getByText('Username')).toBeVisible();
  await expect(page.locator('input[name="name"]')).toBeVisible();
  await expect(page.locator('input[name="response"]')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
});
