import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "./world";
import { expect } from "@playwright/test";

Given('I am on the {string} page', async (expectedText) => {
    const actualText = await page.locator(`a[id='nava']`).textContent();
    expect(expectedText).toEqual(actualText!.trim());
});

When('I click categories link', async () => {
    await page.locator(`//div[@class='list-group']//a[1]`).click();
});

Then('I see {string}, {string} and {string} under categories', async (string, string2, string3) => {
    const actualSublinks = await page.locator(`//div[@class='list-group']//a[not(@id='cat')]`).allTextContents();
    const expectedSublinks = [string, string2, string3];
    expect(actualSublinks).toEqual(expectedSublinks);
});


When('I choose {string}', async (expectedCategory) => {
    const subLinks = page.locator(`//div[@class='list-group']//a`);
    const subLinksCount = await page.locator(`//div[@class='list-group']//a`).count();
    for (let i = 1; i <= subLinksCount; i++) {
        const actualCategory = await subLinks.nth(i).textContent();
        if (actualCategory === expectedCategory) {
            await subLinks.nth(i).click();
            break;
        }
    }   
});

Then('I should see {string} in display', async (actualProduct) => {
    const product = page.locator(`//h4[@class='card-title']//a[text()='${actualProduct}']`);
    await expect(product).toBeEnabled();
    expect(product).toBeTruthy();
});


