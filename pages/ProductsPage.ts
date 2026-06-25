import { type Locator, type Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly title: Locator;
  readonly inventoryItems: Locator;
  readonly cartBadge: Locator;
  readonly sortDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    // Locators target SauceDemo's data-test attributes
    this.title = page.locator('[data-test="title"]');
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
  }

  // Finds a product by name and clicks its add-to-cart button
  async addItemToCart(itemName: string) {
    const item = this.page.locator('[data-test="inventory-item"]').filter({ hasText: itemName });
    await item.locator('button').click();
  }
}