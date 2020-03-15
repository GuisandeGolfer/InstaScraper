import express from "express";
import cors from "cors";
import { getInstaFollowers } from "./lib/scraper";
import db from "./lib/db";
/**
 * just importing the cron file to the index will kick the
 * cron job to activate
 * */
//import "./lib/cron";
const app = express();
app.use(cors());

app.get("/scrape", async (req, res, next) => {
  //destructuring the array that is returned
  const [followers, following, posts] = await getInstaFollowers();

  res.json({ followers, following, posts });
});

app.get("/data", async (req, res, next) => {
  const { Instagram } = db.value();

  res.json(Instagram);
});

app.listen(2500, () => console.log("Server running at Port 2500"));
