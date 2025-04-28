import { test, Page, expect } from '@playwright/test';
import { Login }  from '../page/Login';
import { AddToCart } from '../page/AddToCart';
import { ProcessPayment } from '../page/ProcessPayment';
import { loginData } from '../data/loginData';



test.describe('Process Payment', () => {
    test.beforeEach(async ({ page }) => {
        const login = new Login(page);
        await login.goto(); // 打开页面并处理弹窗
        await login.Login(loginData); // 登录
        await login.verifyLogin(); // 验证登录成功
      
        const addToCart = new AddToCart(page);
        await addToCart.AddToCart(); // 添加到购物车
    //    await addToCart.VerifyAddToCart(); // 验证添加成功

    });

    test('Process Payment', async ({ page }) => {
        const processPayment = new ProcessPayment(page);
        await processPayment.ProcessPayment(); // 处理支付
        await expect(page.getByText('Thank you for your purchase!')).toBeVisible(); // 验证支付成功
    });
});