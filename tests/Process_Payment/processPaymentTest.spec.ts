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
      
        const addToCart = new AddToCart(page);
        await addToCart.AddToCart(); // Add item to the cart
    //    await addToCart.VerifyAddToCart(); // Verify item added successfully

    });

    test('Process Payment', async ({ page }) => {
        const processPayment = new ProcessPayment(page);
        await processPayment.ProcessPayment(); // Process the payment
        await expect(page.getByText('Thank you for your purchase!')).toBeVisible(); // Verify successful payment
    });
});