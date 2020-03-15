import axios from "axios";
import cheerio from "cheerio";
import db from "./db";

async function getHTML(url) {
  const { data } = await axios.get(url);
  // deconstructs the data value of axios.get(url)
  // look up axios.get() return object for reference

  return data;
}

async function getInstaFollowers() {
  const profileData = await getHTML("https://www.instagram.com/delargo86/");

  let $ = cheerio.load(profileData); //common standard when using cheerio (https://cheerio.js.org/)

  let countTag = $("meta[name=description]").attr("content"); //where the profile data resides

  let count_data = countTag.match(/\d{2,}/g); //returns an ARRAY of values that match the regex.

  return count_data;
}

async function runCronJob() {
  const [followers, following, posts] = await getInstaFollowers(); //deconstructs the values from the ARRAY that is returned

  db.get("Instagram") //lowdb github reference.
    .push({
      date: Date.now(),
      followers: followers,
      following: following,
      posts: posts
    })
    .write(); //writes to the JSON DB we have in '../db.json'
  // console.log("Done!");
}

export { getInstaFollowers, runCronJob };
