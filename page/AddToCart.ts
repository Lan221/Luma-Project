import { Page, expect } from '@playwright/test';
export class AddToCart {
    
    constructor(private page: Page) {
        this.page = page;
    }


    async AddToCart() {


        // Click on "Jackets"
        await this.page.getByRole('menuitem', { name: 'Women' }).hover();

        // Hover over "Tops" to open the submenu
        await this.page.getByRole('menuitem', { name: 'Tops' }).hover();
    
    
        await this.page.getByRole('menuitem', { name: 'Jackets' }).click();
        await this.page.getByRole('listitem').filter({ hasText: 'Neve Studio Dance Jacket' }).getByLabel('S', { exact: true }).click();
        await this.page.getByRole('listitem').filter({ hasText: 'Neve Studio Dance Jacket' }).getByLabel('Black').click();
        await this.page.getByRole('listitem').filter({ hasText: 'Neve Studio Dance Jacket' }).locator('button').click(); 
    
         
       }
    
    async VerifyAddToCart() {
        // 确保 "My Cart" 可见
        const cartLink = this.page.getByRole('link', { name: 'My Cart' });
        await cartLink.scrollIntoViewIfNeeded(); // 滚动页面以确保元素可见

        // 点击 "My Cart items"
        await cartLink.click();

        // 等待购物车内容加载完成
        console.log('Waiting for #mini-cart to become visible...'); // 添加日志
        await this.page.locator('#mini-cart').waitFor({ state: 'visible' });

        // 验证商品 "Neve Studio Dance Jacket" 是否在购物车中
        console.log('Verify new added item visible...'); // 添加日志
        await expect(this.page.locator('#mini-cart').getByText(/Neve Studio Dance/i)).toBeVisible();
    }

}
