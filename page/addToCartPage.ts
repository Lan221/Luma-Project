import { Page, expect } from '@playwright/test';

export class AddToCart {
    constructor(private page: Page) {
        this.page = page;
    }

    async AddToCart(product: { category: string; subCategory: string; subCategory1: string;item: string; size: string; color: string }) {
        // Hover over the main category (e.g., "Women")
        await this.page.getByRole('menuitem', { name: product.category }).hover();
        
        // Hover over the subcategory (e.g., "Tops")
        await this.page.getByRole('menuitem', { name: product.subCategory }).hover();

        // Click on the specific category (e.g., "Jackets")
        await this.page.getByRole('menuitem', { name: product.subCategory1 }).click();

        // Select the product by name

        await this.page.getByRole('listitem').filter({ hasText: product.item }).scrollIntoViewIfNeeded; // Scroll to make the element visible

        await this.page.getByRole('listitem').filter({ hasText: product.item }).getByLabel(product.size, { exact: true }).click();
        await this.page.getByRole('listitem').filter({ hasText: product.item }).getByLabel(product.color).click();

        // Click the "Add to Cart" button
        await this.page.getByRole('listitem').filter({ hasText: product.item }).locator('button').click();
    }
     async VerifyAddToCart(product: { category: string; subCategory: string; subCategory1: string;item: string; size: string; color: string }) {
        // Ensure "My Cart" is visible
        //const cartLink = this.page.getByRole('link', { name: 'My Cart' });
        //await cartLink.scrollIntoViewIfNeeded(); // Scroll to make the element visible

        // Click on "My Cart items"
    //    await cartLink.click();
        const successMessageText = `You added ${product.item} to your`;
        const successMessage = this.page.getByText(successMessageText);
        console.log ('waiting for ${successMessage} to be visible...');
        await successMessage.scrollIntoViewIfNeeded();
        await expect(successMessage).toBeVisible();

        // Wait for the cart content to load
     //   console.log('Waiting for #mini-cart to become visible...'); // Add log
     //   await this.page.locator('#mini-cart').waitFor({ state: 'visible' });

        // Verify the product is visible in the cart
    //    console.log('Verify new added item visible...'); // Add log
    //    await expect(this.page.locator('#mini-cart').getByText(product.item )).toBeVisible();
    }
}
