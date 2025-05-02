import { test, expect } from '@playwright/test';
import { Login } from '../../page/loginPage';
import { loginData } from '../../data/loginData';

test.describe('Login Test', () => {
    test('Login with valid credentials', async ({ page }) => {
        const login = new Login(page);
        await login.goto(); // open the page and handle the popup
        await login.Login(loginData); // login with valid credentials
        await login.verifyLogin(); // verify successful login
    });
});
