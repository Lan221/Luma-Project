import { test, Page, expect } from '@playwright/test';
import { Login }  from '../../page/loginPage';
import { AddToCart } from '../../page/addToCartPage';
import { ProcessPayment } from '../../page/processPaymentPage';
import { loginData } from '../../data/loginData';

test.describe('Process Payment', () => {
    test.beforeEach(async ({ page }) => {
        const login = new Login(page);
        await login.goto(); // Open the page and handle the popup
        await login.Login(loginData); // Log in
        await login.verifyLogin(); // Verify successful login
    })
    
    test('Panier is empty', async ({page}) => {
        await page.getByRole('link', { name: ' My Cart' }).click();
        await expect(page.getByText('You have no items in your')).toBeVisible();
    })
});