import cron from "node-cron";
import { runCronJob } from "./scraper.js";

cron.schedule("0 22 * * 7", () => {
  console.log("Running the CRON!");
  runCronJob();
});
