import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Products Page', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;

  // Log in before every test so we start on the products page
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('displays the products page after login', async () => {
    await expect(productsPage.title).toHaveText('Products');
  });

  test('displays inventory items', async () => {
    await expect(productsPage.inventoryItems.first()).toBeVisible();
  });

  test('can add an item to cart', async () => {
    await productsPage.addItemToCart('Sauce Labs Backpack');
    await expect(productsPage.cartBadge).toHaveText('1');
  });

  test('can sort products by price low to high', async () => {
    // Select the 'lohi' option from the sort dropdown
    await productsPage.sortDropdown.selectOption('lohi');
    const firstItemPrice = productsPage.page.locator('[data-test="inventory-item-price"]').first();
    await expect(firstItemPrice).toHaveText('$7.99');
  });
});