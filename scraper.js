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
  const watchDog = page.waitForFunction("document.querySelectorAll('.rio-striped').length > 0");
  await watchDog;

  for (let i = 0; i < 12; i++) {
    let tbody = undefined;
    let row = undefined;
    //scraping fails here, doesnt 
    await page.evaluate(() => {
      tbody = document.querySelectorAll('.rio-striped')[i];
      row = tbody.querySelectorAll('tr')[0];
    });

    await page.click(row);
    debugger;
  };

  let allDungeonTimes = await page.evaluate(() => {
    let dataOutput = {};
    document.querySelectorAll('tbody[class="rio-striped"]') .forEach((el, index) => { dataOutput[index] = el.innerText; });
    return dataOutput;
  });

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
