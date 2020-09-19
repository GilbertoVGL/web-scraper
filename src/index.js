const cron = require("node-cron");
const realtyScrapper = require('./models/realtyScrapper');
console.log('started scraper worker');

cron.schedule("0 0 * * *", async () => {
    console.log('started cron schedule');
    const scraper = new realtyScrapper.RealtyScrapper();
    const result = await scraper.getRealties();
    console.log('result =>> ', result);
});
