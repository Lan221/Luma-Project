import { Page, expect } from '@playwright/test';
import { loginData } from '../data/loginData';

export class Login {
    constructor(private page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://magento.softwaretestingboard.com/');
        
        // Vérifier si le bouton "ACCEPTER" est présent
        const agreeButton = this.page.locator('#accept-btn');
        if (await agreeButton.isVisible()) {
            await agreeButton.click();
        } else {
            console.log('Le bouton "ACCEPTER" n\'est pas apparu, passage...');
        }
    }

    async Login(user: { email: string; password: string }) {
        // Cliquer sur le lien "Se connecter"
        await this.page.getByRole('link', { name: 'Sign In' }).click();

        // Remplir le champ "Email"
        await this.page.getByLabel('Email').fill(user.email);

        // Remplir le champ "Mot de passe"
        await this.page.locator('#pass').fill(user.password);

        // Cliquer sur le bouton "Se connecter"
        await this.page.getByRole('button', { name: 'Sign In' }).click();
    }

    async verifyLogin() {
        // Vérifier que le message "Bienvenue" est visible
        await expect(this.page.getByText('Welcome').first()).toBeVisible();
    }
}