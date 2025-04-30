import { test, expect } from '@playwright/test';
import { Login } from '../../page/loginPage';
import { loginData } from '../../data/loginData';

test.describe('Login Test', () => {
    test('Login with valid credentials', async ({ page }) => {
        const login = new Login(page);
        await login.goto(); // 打开页面并处理弹窗
        await login.Login(loginData); // 登录
        await login.verifyLogin(); // 验证登录成功
    });
});
