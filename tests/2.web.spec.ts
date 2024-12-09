import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

  await page.goto('https://aesmwebsite-stg-dev.azurewebsites.net/');
});

test('Open Menu on th website', async ({ page }) => {
  await page.locator('//*[@id="ae-primary-nav-popup"]/div/div/a').click()
  


});

test('Open Menu About Us', async ({ page }) => {
  await page.locator('//*[@id="menu-1-18d444f"]/li[1]').click()
  await expect(page.locator('//*[@id="menu-1-18d444f"]/li[1]')).toBeVisible()

});

test('Open Menu Careers', async ({ page }) => {
  await page.locator('//*[@id="menu-1-18d444f"]/li[2]').click()
  await expect(page.locator('//*[@id="menu-1-18d444f"]/li[2]')).toBeVisible()

});
test('Open Menu Contact us', async ({ page }) => {
  await page.locator('//*[@id="menu-1-18d444f"]/li[4]').click()
  await expect(page.locator('//*[@id="ae-office-form"]/div/div[2]/div/div[3]/div/div/a')).toBeVisible()

});

test('Open Search', async ({ page }) => {
  await page.locator('//*[@id="ae-header-search"]/div/div/a/span/span/i').click()
  //await page.locator('//*[@id="ajaxsearchlite1"]/div/div[2]/form/input[1]').fill('test')
  
  // await expect(page.locator('//*[@id="ae-office-form"]/div/div[2]/div/div[3]/div/div/a')).toBeVisible()

});
