import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {


  await page.goto('http://localhost:5173/');
});


test('Verify default pricing BTC', async ({ page }) => {
  await expect(page).toHaveTitle('Bitcoin Price Calculator');
    await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[1]')).toHaveText('100K PageViews')
    await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[3]/div[1]/div[1]')).toHaveText('$16.00')
});
test('Verify default pricing BTC monthly', async ({ page }) => {
    await expect(page).toHaveTitle('Bitcoin Price Calculator');
    await page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[4]/label/span').click()
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[1]')).toHaveText('100K PageViews')
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[3]/div[1]/div[1]')).toHaveText('$12.00')
  });
  test('Verify BTC price up $24', async ({ page }) => {
    await expect(page).toHaveTitle('Bitcoin Price Calculator');
    await page.waitForSelector('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[2]/div');
    const s = await page.$("//*[@id='root']/div/div[2]/div/div[2]/div[1]/div/div[2]/div")
    let ele = page.locator("//*[@id='root']/div/div[2]/div/div[2]/div[1]/div/div[3]/div[1]/div[1]")
    if (s) {
            let srcBound = await s.boundingBox();
            if (srcBound) {
                await page.mouse.move(srcBound.x + srcBound.width / 1.25,
                    srcBound.y + srcBound.height / 1)
                await page.mouse.down();
                await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[1]')).toHaveText('500K PageViews')
                await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[3]/div[1]/div[1]')).toHaveText('$24.00')
}
}

  });
  test('Verify pricing BTC price $24 monthly', async ({ page }) => {
    await expect(page).toHaveTitle('Bitcoin Price Calculator');
    await page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[4]/label/span').click()
    await page.waitForSelector('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[2]/div');
    const s = await page.$("//*[@id='root']/div/div[2]/div/div[2]/div[1]/div/div[2]/div")
    let ele = page.locator("//*[@id='root']/div/div[2]/div/div[2]/div[1]/div/div[3]/div[1]/div[1]")
    if (s) {
            let srcBound = await s.boundingBox();
            if (srcBound) {
                await page.mouse.move(srcBound.x + srcBound.width / 1.25,
                    srcBound.y + srcBound.height / 1)
                await page.mouse.down();
                await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[1]')).toHaveText('500K PageViews')
                await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[3]/div[1]/div[1]')).toHaveText('$18.00')

                          }              }
  });
  test('Verify BTC price up $36', async ({ page }) => {
    await expect(page).toHaveTitle('Bitcoin Price Calculator');
    await page.waitForSelector('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[2]/div');
        const s = await page.$("//*[@id='root']/div/div[2]/div/div[2]/div[1]/div/div[2]/div")
        let ele = page.locator("//*[@id='root']/div/div[2]/div/div[2]/div[1]/div/div[3]/div[1]/div[1]")
        if (s) {
                let srcBound = await s.boundingBox();
                if (srcBound) {
                    await page.mouse.move(srcBound.x + srcBound.width / 1,
                        srcBound.y + srcBound.height / 1)
                    await page.mouse.down();
                    await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[1]')).toHaveText('1M PageViews')
                    await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[3]/div[1]/div[1]')).toHaveText('$36.00')
                    
                }
                }
  });
  test('Verify pricing BTC price $36 monthly', async ({ page }) => {
    await expect(page).toHaveTitle('Bitcoin Price Calculator');
    await page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[4]/label/span').click()
    await page.waitForSelector('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[2]/div');
        const s = await page.$("//*[@id='root']/div/div[2]/div/div[2]/div[1]/div/div[2]/div")
        let ele = page.locator("//*[@id='root']/div/div[2]/div/div[2]/div[1]/div/div[3]/div[1]/div[1]")
        if (s) {
                let srcBound = await s.boundingBox();
                if (srcBound) {
                    await page.mouse.move(srcBound.x + srcBound.width / 1,
                        srcBound.y + srcBound.height / 1)
                    await page.mouse.down();
                    await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[1]')).toHaveText('1M PageViews')
                    await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[3]/div[1]/div[1]')).toHaveText('$27.00')
                    
                }
                }


  });