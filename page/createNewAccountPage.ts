import { Page, expect } from '@playwright/test';
import { userData } from '../data/userData';

export class CreateNewAccount {
    constructor(private page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://magento.softwaretestingboard.com/');
        
        // 检查 "DISAGREE" 按钮是否存在
        const agreeButton = this.page.locator('#accept-btn');
        if (await agreeButton.isVisible()) {
            await agreeButton.click();
        } else {
            console.log('"AGREE" button did not appear, skipping...');
        }
    }

    async CreateNewAcount(user: { firstName: string; lastName: string; email: string; password: string; confirmPassword: string }) {
        await this.page.getByRole('link', { name: 'Create an Account' }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).fill(user.firstName);
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill(user.lastName);
        await this.page.getByLabel('Email').fill(user.email);
        await this.page.locator('#password').fill(user.password);
        await this.page.locator('#password-confirmation').fill(user.confirmPassword);
        await this.page.getByRole('button', { name: 'Create an Account' }).click();
    }

    async verifyCreateNewAccount() {
        await expect(this.page.getByText('Thank you for registering with Main Website Store.')).toBeVisible();
    }

    async logout() {


        await this.page.getByRole('listitem').filter({ hasText: 'Change My Account My Wish' }).locator('button').click();
        await this.page.getByRole('link', { name: 'Sign Out' }).isVisible();
        await this.page.getByRole('link', { name: 'Sign Out' }).click();
        await expect(this.page.locator('//a[contains(text(), "Sign In")]').nth(0)).toBeVisible();

    }
}
