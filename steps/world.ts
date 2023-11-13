import {After, Before, Status, setDefaultTimeout} from '@cucumber/cucumber';
import { Browser, chromium, Page, Request } from 'playwright';

let browser: Browser;
let page: Page;
let request: Request;

setDefaultTimeout(60 * 1000);

Before(async () => {
    try {
        browser = await chromium.launch({headless: false});
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://www.demoblaze.com');
        console.log(`captured site title as ${await page.title()}`);
    }
    catch (error) {
        console.log(`chrome navigation to demo site failed due to ${error}`);
        throw new Error(`chrome navigation to demo site failed due to ${error}`);
    }
    return
});

After(async function(Scenario) {
    if(Scenario.result!.status === Status.FAILED) {
        await this.attach(await page.screenshot({path: `screenshots/${Scenario.pickle.name}.png`, fullPage: true}), "image/png");
    }
    await browser.close();
});

export { page, browser, request };