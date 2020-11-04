const puppeteer = require('puppeteer');

(async () => {
  const userInfo = {
    country: 'us',
    realm: 'area-52',
    name: 'lukè',
  };

  let pageUrl = `https://raider.io/characters/${userInfo.country}/${
      userInfo.realm}/${userInfo.name}#season=season-bfa-4`;

  let browser = await puppeteer.launch({headless: false, slowMo: 250});
  let page = await browser.newPage();

  await page.setViewport({
    width: 1920,
    height: 1080,
  });

  await page.goto(pageUrl, {waitUntil: 'domcontentloaded'});

  const agreeButtonSelector = '.qc-cmp2-summary-buttons button[mode=\"primary\"]';
  //await agree button load
  const watchDog = page.waitForFunction(`document.querySelector('${agreeButtonSelector}') !== null`);
  await watchDog;

  await (await page.$(agreeButtonSelector)).click();
  setTimeout(() => {
  }, 2500);

  //creates a list of all twelve t-body's that need to be pressed
  const tbodyList = await page.$$(".rio-striped");

  //module clicks through all elements, currently only clicks first two
  for (let i = 0; i < tbodyList.length; i++) {
      const tbody = tbodyList[i];

      await tbody.click({ delay: 250 });
      //await tr's length, this always results true? (why while loop currently?) 
      while ((await tbody.$$eval('tr', trs => trs.length)) <= 1) { }
      //timeout incase error was based on overload
      setTimeout(() => {
      }, 5000);
   }

  //returns top ten dungeon times and parses string (incomplete parser, otherwise works)
  let topDungeonTimes = await page.evaluate(() => {
    let splitRecordsFull = [];
    for (let i = 0; i < 12; i++) {
      let dungeonRecords =
          document.querySelectorAll('tbody[class="rio-striped"]')[i].innerText;
      let splitRecords =
          dungeonRecords.replaceAll('\t', ' ').replaceAll('\n', '').split(' ');
      // add trim()
      splitRecordsFull[i] = splitRecords.filter((el) => el !== ' ');
    }
    return splitRecordsFull;
  });

  console.log(allDungeonTimes);
  await browser.close();
})();
