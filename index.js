import express from "express";
import { getInstaFollowers } from "./lib/scraper";
import db from "./lib/db";
/**
 * just importing the cron file to the index will kick the
 * cron job to activate
 * */

const app = express();

app.get("/scrape", async (req, res, next) => {
  console.log("Scraping!");
  const [followers, following, posts] = await getInstaFollowers();

  res.json({ followers, following, posts });
});

app.listen(3000, () => console.log("Server running at Port 3000"));
