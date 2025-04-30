import { Page, expect } from '@playwright/test';

export class ProcessPayment {
    constructor(private page: Page) {
        this.page = page;
    }
    async ProcessPayment(){
            // Accéder au panier
            await this.page.getByRole('link', { name: 'Cart' }).click();

            // Passer à la caisse
            await this.page.getByRole('button', { name: 'Proceed to Checkout' }).click();
            await this.page.getByRole('radio', { name: 'Table Rate Best Way' }).check();
            await this.page.getByRole('button', { name: 'Next' }).click();
            await this.page.getByRole('button', { name: 'Place Order' }).click();
            await expect(this.page.getByText('Thank you for your purchase!')).toBeVisible();
    
    }
}