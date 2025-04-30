import { Page, expect } from '@playwright/test';

export class ProcessPayment {
    constructor(private page: Page) {
        this.page = page;
    }

    async ProcessPaymentAddress(address: { street: string; city: string; phoneNumber: string; postalCode: string }) {
        // Accéder au panier
        await this.page.getByRole('link', { name: 'My Cart' }).click();

        // Passer à la caisse
        await this.page.getByRole('button', { name: 'Proceed to Checkout' }).click();

        // Remplir l'adresse de livraison
        await this.page.getByRole('textbox', { name: 'Street Address: Line 1' }).fill(address.street);
        await this.page.getByRole('textbox', { name: 'City *' }).fill(address.city);
        await this.page.locator('select[name="region_id"]').selectOption('1'); // Sélectionner une région
        await this.page.getByRole('textbox', { name: 'Phone Number *' }).fill(address.phoneNumber);

        // Valider les étapes de la commande
        await this.page.locator('#checkoutSteps').click();
        await this.page.getByRole('radio', { name: 'Table Rate Best Way' }).check();
        await this.page.getByRole('button', { name: 'Next' }).click();

        // Remplir le code postal
        await this.page.getByRole('textbox', { name: 'Zip/Postal Code *' }).fill(address.postalCode);
        await this.page.getByRole('button', { name: 'Next' }).click();

        // Confirmer l'adresse de facturation et passer la commande
        await this.page.getByRole('checkbox', { name: 'My billing and shipping' }).check();
        await (this.page.getByRole('button', { name: 'Place Order' })).click();
    }
}


