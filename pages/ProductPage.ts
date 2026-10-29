
import { type Locator, type Page } from '@playwright/test';

export class ProductPage {
  private readonly page: Page;

  readonly nameInput: Locator;
  readonly skuInput: Locator;
  readonly priceInput: Locator;
  readonly categoryDropDown: Locator;
  readonly stockCheck: Locator;
  readonly productTitle: Locator;
  readonly saveButton: Locator;
  readonly selectCategoryFilter: Locator;
 
  

  constructor(page: Page) {
    this.page = page;

    //this.nameInput = page.getByRole('textbox', { name: 'Name' });
    this.nameInput = page.locator('#product-name');
    this.skuInput = page.locator('#product-sku');
    this.priceInput = page.locator('#product-price');
    //this.categoryDropDown = page.getByRole('combobox', { name: 'Category' });    
    this.categoryDropDown = page.locator('#product-category');
    this.stockCheck = page.locator('.toggle-switch');
    this.productTitle = page.getByRole('heading', {name: 'Product Manager (VanillaJS)'});
    this.saveButton = page.getByRole('button', {name: 'Save' });
    this.selectCategoryFilter = page.locator('#category-filter');   
  }

    async fillForm(
    name: string,
    sku: string,
    price: string,
  ): Promise<void> {
    await this.nameInput.fill(name);
    await this.skuInput.fill(sku);
    await this.priceInput.fill(price);
    await this.categoryDropDown.selectOption('Electronics');
    await this.stockCheck.check();
    await this.saveButton.click();
  }

  async filterCategory(
    category: string
  ): Promise<void> {
    await this.selectCategoryFilter.selectOption('Electronics');

  }

  async verifyProductAdded(
    product: string,
    pagePar: Page
  ): Promise<void> {
    await pagePar.getByRole('heading', {name: product});
  }

  async deleteProduct(
    product: string,
    pagePar: Page
  ): Promise<void> {
    await pagePar.locator('button[aria-label="Delete '+ product +'"]').click();
  }

}