import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to SauceDemo before every test
    await page.goto('/');
  });

  test('successful login with standard user', async ({ page }) => {
    // Fill in valid credentials
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    // Verify the URL changes to the inventory page
    await expect(page).toHaveURL(/inventory/);
  });
    test('locked out user cannot login', async ({ page }) => {
    // Attempt login with a locked-out account
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    // Verify the error message mentions the lockout
    await expect(page.locator('[data-test="error"]')).toContainText('locked out');
  });

  test('login fails with invalid credentials', async ({ page }) => {
    // Attempt login with non-existent credentials
    await page.locator('[data-test="username"]').fill('invalid_user');
    await page.locator('[data-test="password"]').fill('wrong_password');
    await page.locator('[data-test="login-button"]').click();
    // Verify an error message appears
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });
}); 