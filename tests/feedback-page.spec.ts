import { test, expect } from '@playwright/test';

test.use({
  storageState: 'admin-auth.json',
});

test('Feedback Page', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/feedback');
  await expect(page.locator('text=Username')).toBeVisible();
  await expect(page.locator('text=admin@foo.com')).toBeVisible();
  await expect(page.locator('text=Feedback')).toBeVisible();
  await expect(page.locator('button:has-text("Submit")')).toBeVisible();
  await expect(page.locator('button:has-text("Reset")')).toBeVisible();
  await page.fill('input[name="Feedback"]', 'testing feedback');
  await page.click('button:has-text("Submit")');
  await page.goto('http://127.0.0.1:3000/admin');
  await expect(page.locator('text=testing feedback')).toBeVisible();
});
