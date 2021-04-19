   const puppeteer = require('puppeteer');
   const readline = require('readline-sync');

let name = readline.question("Type/Paste the complete link (ex. http://example.com )\n");

console.log("Input URL is " + name );

    (async function main() {
      try {
        const browser = await puppeteer.launch();
        const [page] = await browser.pages();
        await page.setDefaultNavigationTimeout(0);

        await page.goto(name, {   waitUntil: 'load',
        // Remove the timeout
        timeout: 0 });
        const data = await page.evaluate(() => document.querySelector('*').outerHTML);

        console.log(data);

        await browser.close();
      } catch (err) {
        console.error(err);
      }
    })();
