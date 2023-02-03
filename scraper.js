const puppeteer = require('puppeteer');
const fs = require('fs/promises');
const selectorMovie = '.titleColumn a, .titleColumn span, .ratingColumn strong';

const arrOfMovies = [];

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage(0);
  await page.goto(url);
  //await page.screenshot({ path: 'imdbSS.jpg', fullPage: true });    --- Options for Screenshot that will get entire page.

  function Movie(title, date, rating) {
    this.title = title;
    this.date = date;
    this.rating = rating;
  }

  const scrapedMovies = await page.$$eval(selectorMovie, (movies) => {
    return movies.map((x) => x.textContent);
  }); /* dates- the data from our selector (first argument) will be passed into an actual array list */

  function populateMovies() {
    var a = 3;
    var b = 1;
    var c = 2;
    var i = 0;
    arrOfMovies.push(
      new Movie(
        scrapedMovies[0],
        scrapedMovies[1],
        parseFloat(scrapedMovies[2])
      )
    );
    while (i < 249) {
      arrOfMovies.push(
        new Movie(
          scrapedMovies[a],
          scrapedMovies[a + b],
          parseFloat(scrapedMovies[a + c])
        )
      );
      a += 3;
      i++;
    }
  }

  populateMovies();

  const stringifyArr = JSON.stringify(arrOfMovies);
  console.log(arrOfMovies[0]);
  console.log(arrOfMovies[1]);
  console.log(arrOfMovies[249]);
  fs.writeFile('top250imdb.json', stringifyArr);
  //fs.appendFile('top250imdb.txt', scrapedDates.join('\r\n'));
  browser.close();
}

scrapeProduct('https://www.imdb.com/chart/top/?ref_=nv_mv_250');
