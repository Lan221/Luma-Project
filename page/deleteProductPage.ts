import { Page, expect } from '@playwright/test';
export class DeleteProduct {
    constructor(private page: Page) {
        this.page = page;
    }

    async DeleteProduct(productName: string) {
        
        const cart = this.page.getByRole('link', { name: 'My Cart' });
        await cart.scrollIntoViewIfNeeded();
        await cart.click(); // Faire défiler pour rendre l'élément visible
      
        // wait for the cart panel to be visible
        const cartPanel = this.page.locator('.minicart-wrapper.active');
        await cartPanel.waitFor({ state: 'visible'});

        // verify the product is in the cart
        const productItem = cartPanel.locator('.product-item-details').filter({ hasText: productName});

        // find the remove button
        const removeButton = productItem.locator('.action.delete');

        // click the remove button
        await removeButton.click();



        // Confirmer la suppression si nécessaire
        await expect(this.page.getByText('Are you sure you would like')).toBeVisible();
        await this.page.getByRole('button', { name: 'OK' }).click();
    }
}