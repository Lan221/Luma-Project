import {test, Page, expect} from '@playwright/test';
import {Login}  from '../page/Login';
import { AddToCart } from '../page/AddToCart';
import { loginData } from '../data/loginData';


test.describe('Add to Cart', () => {
    test.beforeEach(async ({ page }) => {
        const login = new Login(page);
        await login.goto(); // 打开页面并处理弹窗
        await login.Login(loginData); // 登录
        await login.verifyLogin(); // 验证登录成功
    });

    test('Add to Cart', async ({ page }) => {
        const addToCart = new AddToCart(page);
        await addToCart.AddToCart(); // 添加到购物车
        await addToCart.VerifyAddToCart(); // 验证添加成功
    });
});