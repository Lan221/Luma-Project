import { test } from '@playwright/test';
import { CreateNewAccount } from '../page/CreateNewAccount';
import { userData } from '../data/userData';

test.describe('Create Accounts for All Users', () => {
    test('Create accounts for multiple users', async ({ page }) => {
        const createNewAccount = new CreateNewAccount(page);

        // 遍历所有用户数据
        for (const user of userData) {
            await createNewAccount.goto(); // 打开页面并处理弹窗
            await createNewAccount.CreateNewAcount(user); // 创建账户
            await createNewAccount.verifyCreateNewAccount(); // 验证账户创建成功
            await createNewAccount.logout();
        }
    });
});