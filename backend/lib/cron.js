import cron from "node-cron";
import { runCronJob } from "./scraper.js";

// There is a special format to the first parameter that is passed to 'Schedule()' : google it
cron.schedule("* * * * *", () => {
  console.log("Running the CRON!");
  runCronJob();
});
