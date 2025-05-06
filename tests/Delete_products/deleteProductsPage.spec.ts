import { test, Page, expect } from '@playwright/test';
import { Login } from '../../page/loginPage';
import { DeleteProduct } from '../../page/deleteProductPage';
import { loginData } from '../../data/loginData';
import { productTestData } from '../../data/productData';
import { AddToCart } from '../../page/addToCartPage';


test.describe('Delete products from Cart', () => {
    test.beforeEach(async ({ page }) => {
        // Log in only once before all tests
        const login = new Login(page);
        await login.goto(); // Open the page and handle the popup
        await login.Login(loginData); // Log in
        await login.verifyLogin(); // Verify successful login

        const addToCart = new AddToCart(page);
        // Use a for loop to add multiple products
        for (const product of productTestData) {
            await addToCart.AddToCart(product); // Add product to the cart
            await addToCart.VerifyAddToCart(product); // Verify the product was added successfully
        }
    });

    test('Delete products from the cart', async ({ page }) => {

         
          const deleteProduct = new DeleteProduct(page);
          await deleteProduct.DeleteProduct("Inez Full Zip Jacket"); // Delete product from the cart
    });
});