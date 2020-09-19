// const express = require('express');
// const cors = require('cors');
const cron = require("node-cron");
const realtyScrapper = require('./models/realtyScrapper');
// const app = express();
// const port = 3000;

// app.use(cors({ origin: true }));
// app.use(express.json());

// const endpoints = require('./endpoints');
// const realtyScrapperEndpoint = new endpoints.RealtyScrapperEndpoint();

console.log('started scraper worker');
// cron.schedule("* * * * *", async () => {

cron.schedule("0 0 * * *", async () => {
    console.log('started cron schedule');
    const scraper = new realtyScrapper.RealtyScrapper();
    const result = await scraper.getRealties();
    console.log('result =>> ', result);
});

// cron.schedule("0 0 * * *", () => realtyScrapperEndpoint.get());
// cron.schedule("* * * * *", () => realtyScrapperEndpoint.get());

// app.get('/scrap', realtyScrapperEndpoint.get);

// const server = app.listen(port, () => {
//     console.log('Server ready http://localhost:', port);
//     console.log('Process ', process.pid);
// });

// function handleSignal() {
//     console.log('SIGNAL RECEIVED');
//     server.close(() => {
//         console.log('Process terminated');
//         process.exit(0);
//     });
// }

// process.on('SIGTERM', handleSignal);
// process.on('SIGKILL', handleSignal);
