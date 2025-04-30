import { test, Page, expect } from '@playwright/test';
import { Login } from '../../page/loginPage';
import { AddToCart } from '../../page/addToCartPage';
import { loginData } from '../../data/loginData';
import { productTestData } from '../../data/productData';

test.describe('Add multiple products to Cart', () => {
    test.beforeEach(async ({ page }) => {
        // Log in only once before all tests
        const login = new Login(page);
        await login.goto(); // Open the page and handle the popup
        await login.Login(loginData); // Log in
        await login.verifyLogin(); // Verify successful login
    });

    test('Add multiple products to the cart', async ({ page }) => {
        const addToCart = new AddToCart(page);

        // Use a for loop to add multiple products
        for (const product of productTestData) {
            await addToCart.AddToCart(product); // Add product to the cart
            await addToCart.VerifyAddToCart(product); // Verify the product was added successfully
        }
    });
});