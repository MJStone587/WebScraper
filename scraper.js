const puppeteer = require('puppeteer');
var elNum = 0;
var scrapeObjArr = [{}];

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage(0);
  await page.goto(url);

  /* First Rated IMDB Title */
  const [el] = await page.$x(
    '//*[@id="main"]/div/span/div/div/div[3]/table/tbody/tr[1]/td[2]/a'
  );
  const txtTitle = await el.getProperty('textContent');
  const title = await txtTitle.jsonValue();

  /* First Rated IMDB Date Released */
  const [el2] = await page.$x(
    '//*[@id="main"]/div/span/div/div/div[3]/table/tbody/tr[1]/td[2]/span'
  );
  const txtDate = await el2.getProperty('textContent');
  const date = await txtDate.jsonValue();

  /* FIrst Rated IMDB Rating */
  const [el3] = await page.$x(
    '//*[@id="main"]/div/span/div/div/div[3]/table/tbody/tr[1]/td[3]/strong'
  );
  const rateTxt = await el3.getProperty('textContent');
  const rating = await rateTxt.jsonValue();

  /* Second Rated IMDB title */
  const [el4] = await page.$x(
    '//*[@id="main"]/div/span/div/div/div[3]/table/tbody/tr[2]/td[2]/a'
  );
  const txtTitle1 = await el4.getProperty('textContent');
  const title1 = await txtTitle1.jsonValue();

  /* Second Rated IMDB date */
  const [el5] = await page.$x(
    '//*[@id="main"]/div/span/div/div/div[3]/table/tbody/tr[2]/td[2]/span'
  );
  const txtDate1 = await el5.getProperty('textContent');
  const date1 = await txtDate1.jsonValue();

  /*  Second Rated IMDB rating */
  const [el6] = await page.$x(
    '//*[@id="main"]/div/span/div/div/div[3]/table/tbody/tr[2]/td[3]/strong'
  );
  const rateTxt1 = await el6.getProperty('textContent');
  const rating1 = await rateTxt1.jsonValue();

  /* Third Rated IMDB title */
  const [el7] = await page.$x(
    '//*[@id="main"]/div/span/div/div/div[3]/table/tbody/tr[3]/td[2]/a'
  );
  const txtTitle2 = await el7.getProperty('textContent');
  const title2 = await txtTitle2.jsonValue();

  /* Third Rated IMDB date */
  const [el8] = await page.$x(
    '//*[@id="main"]/div/span/div/div/div[3]/table/tbody/tr[3]/td[2]/span'
  );
  const txtDate2 = await el8.getProperty('textContent');
  const date2 = await txtDate2.jsonValue();

  /*  Third Rated IMDB rating */
  const [el9] = await page.$x(
    '//*[@id="main"]/div/span/div/div/div[3]/table/tbody/tr[3]/td[3]/strong'
  );
  const rateTxt2 = await el9.getProperty('textContent');
  const rating2 = await rateTxt2.jsonValue();

  /* Fourth Rated IMDB title */
  const [el10] = await page.$x(
    '//*[@id="main"]/div/span/div/div/div[3]/table/tbody/tr[4]/td[2]/a'
  );
  const txtTitle3 = await el10.getProperty('textContent');
  const title3 = await txtTitle3.jsonValue();

  /* Fourth Rated IMDB date */
  const [el11] = await page.$x(
    '//*[@id="main"]/div/span/div/div/div[3]/table/tbody/tr[4]/td[2]/span'
  );
  const txtDate3 = await el11.getProperty('textContent');
  const date3 = await txtDate3.jsonValue();

  /*  Fourth Rated IMDB rating */
  const [el12] = await page.$x(
    '//*[@id="main"]/div/span/div/div/div[3]/table/tbody/tr[4]/td[3]/strong'
  );
  const rateTxt3 = await el12.getProperty('textContent');
  const rating3 = await rateTxt3.jsonValue();

  /* 5th Rated IMDB title */
  const [el13] = await page.$x(
    '//*[@id="main"]/div/span/div/div/div[3]/table/tbody/tr[5]/td[2]/a'
  );
  const txtTitle4 = await el13.getProperty('textContent');
  const title4 = await txtTitle4.jsonValue();

  /* 5th Rated IMDB date */
  const [el14] = await page.$x(
    '//*[@id="main"]/div/span/div/div/div[3]/table/tbody/tr[5]/td[2]/span'
  );
  const txtDate4 = await el14.getProperty('textContent');
  const date4 = await txtDate4.jsonValue();

  /*  5th Rated IMDB rating */
  const [el15] = await page.$x(
    '//*[@id="main"]/div/span/div/div/div[3]/table/tbody/tr[5]/td[3]/strong'
  );
  const rateTxt4 = await el15.getProperty('textContent');
  const rating4 = await rateTxt4.jsonValue();

  console.log({
    title,
    date,
    rating,
    title1,
    date1,
    rating1,
    title2,
    date2,
    rating2,
    title3,
    date3,
    rating3,
    title4,
    date4,
    rating4,
  });
  browser.close();
}

scrapeProduct('https://www.imdb.com/chart/top/?ref_=nv_mv_250');
