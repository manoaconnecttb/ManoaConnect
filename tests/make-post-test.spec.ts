import { test, expect } from '@playwright/test';

test.use({
  storageState: 'john-auth.json',
});

test('make Post Page', async ({ page }) => {
  await page.goto('https://manoa-connect.vercel.app/post');
  await expect(page.getByRole('heading', { name: 'Title' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Image' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Content' })).toBeVisible();
  await expect(page.locator('button:has-text("Submit")')).toBeVisible();
  await expect(page.locator('button:has-text("Reset")')).toBeVisible();
  await page.fill('input[name="Title"]', 'testing title');
  await page.fill('input[name="Image"]', 'testing image');
  await page.fill('input[name="Content"]', 'testing content');
  await page.click('button:has-text("Submit")');
  await page.goto('https://manoa-connect.vercel.app/home');
  await expect(page.locator('text=testing title')).toBeVisible();
  await expect(page.locator('text=testing content')).toBeVisible();
});
