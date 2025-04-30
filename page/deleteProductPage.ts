import { Page, expect } from '@playwright/test';
export class DeleteProduct {
    constructor(private page: Page) {
        this.page = page;
    }

    async DeleteProduct(productName: string) {
        // Localiser le produit par son nom
        const productItem = this.page.getByRole('listitem').filter({ hasText: productName });

        // Faire défiler jusqu'au produit pour le rendre visible
        await productItem.scrollIntoViewIfNeeded();

        // Localiser le bouton "Remove" associé au produit
        const removeButton = productItem.getByRole('link', { name: /Remove/i });

        // S'assurer que le bouton "Remove" est visible
        await removeButton.waitFor({ state: 'visible' });

        // Cliquer sur le bouton "Remove"
        await removeButton.click();

        // Confirmer la suppression si nécessaire
        await expect(this.page.getByText('Are you sure you would like')).toBeVisible();
        await this.page.getByRole('button', { name: 'OK' }).click();
    }
}