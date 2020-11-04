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

  const agreeQuery = document.getElementById('qc-cmp2-summary-buttons secondary');
  await page.goto(pageUrl, {waitUntil: 'domcontentloaded'});
  const watchDog = page.waitForFunction('document.getElementById(".sc-bxivhb.gUuNph") !== null');
  await watchDog;

  await (await page.$('.sc-bxivhb.gUuNph').click());

  for (let i = 0; i < 12; i++) {
    await page.evaluate(() => {
      const elLookup= document.querySelectorAll('.rio-striped')[i];
        page.click(elLookup);
        data = elLookup.querySelectorAll('tr')[0];
    });
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
