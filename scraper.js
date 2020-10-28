const puppeteer = require("puppeteer");

(async () => {
	const userInfo = {
		country: "us",
		realm: "area-52",
		name: "lukè",
	};

	let pageUrl = `https://raider.io/characters/${userInfo.country}/${userInfo.realm}/${userInfo.name}#season=season-bfa-4`;

	let browser = await puppeteer.launch();
	let page = await browser.newPage();

    await page.goto(pageUrl, { waitUntil: "networkidle2" });

	for (let i = 0;i < await page.evaluate(() => document.querySelectorAll('tbody[class="rio-striped"]').length);i++) {
		await page.click(await page.evaluate(() => document.querySelectorAll('tbody[class="rio-striped"]')[i]));
}

	let allDungeonTimes = await page.evaluate(() => {
		let dataOutput = {};
		document
			.querySelectorAll('tbody[class="rio-striped"]')
			.forEach((el, index) => {
				dataOutput[index] = el.innerText;
			});
		return dataOutput;
	});

	// let topDungeonTimes = await page.evaluate(() => {
	//     let splitRecordsFull = [];
	//     for (let i = 0; i < 12; i++) {
	//         let dungeonRecords = document.querySelectorAll('tbody[class="rio-striped"]')[i].innerText;
	//         let splitRecords = dungeonRecords.replaceAll('\t', ' ').replaceAll('\n', '').split(' ');
	//         splitRecordsFull[i] = splitRecords.filter(el => el !== ' ');
	//     };
	//     return splitRecordsFull;
	// });
	console.log(allDungeonTimes);
	await browser.close();
})();
