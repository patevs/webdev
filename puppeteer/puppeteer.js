/*********************************
 * * PUPPETEER EXAMPLE FUNCTIONS *
 *********************************/

/**
 *	* Initialize a puppeteer browser instance
 */
async function initPuppeteer(headlessMode) {
  // ..
  // Initialize an interactive prompt
  const browserPrompt = new Signale({
    interactive: true,
    scope: "puppeteer"
  });
  // Log status to prompt
  browserPrompt.await("[%d/2] - Launching Puppeteer browser...", 1);
  // Launch puppeteer browser
  const browser = await puppeteer.launch({ headless: headlessMode });
  // Get browser version
  const browserVersion = await browser.version();
  // Log status to prompt
  browserPrompt.success(
    "[%d/2] - Launched Puppetter browser version: %s \n",
    2,
    green(browserVersion)
  );
  // Return the browser instance
  return browser;
  // ..
}

// ------------------------------------------//

/**
 *	* Create a new page in puppeteer browser and navigate
 *	* 	to a given page.
 *
 * @param { puppeteer browser instance } browser
 * @param { target url } url
 */
async function createAndGotoPage(browser, url) {
  // ..
  // Initialize an interactive prompt
  const pagePrompt = new Signale({ interactive: true, scope: "puppeteer" });
  // Log status to prompt
  pagePrompt.await("[%d/2] - Creating a new browser page...", 1);
  // Create a new page in the browser
  const page = await browser.newPage();
  // Log status to prompt
  pagePrompt.success("[%d/2] - New browser page created!\n", 2);
  // Log status to prompt
  pagePrompt.await("[%d/2] - Navigating to: %s", 1, link(url));
  // Navigate the page to the target url
  await page.goto(url);
  // Log status to prompt
  pagePrompt.success("[%d/2] - Navigated to: %s \n", 2, link(url));
  // Return the new page
  return page;
  // ..
}

// EOF //
