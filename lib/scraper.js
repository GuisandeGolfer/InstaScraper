import axios from "axios";
import cheerio from "cheerio";

async function getHTML(url) {
  const { data: html } = await axios.get(url);

  return html;
}

async function getInstaFollowers() {
  const count = await getHTML("https://www.instagram.com/delargo86/");
  let $ = cheerio.load(count);

  let tag = $("meta[name=description]").attr("content");
  let insta_data = tag.match(/\d{2,}/g);

  return insta_data;
}

async function runCronJob() {
  const [followers, following, posts] = await getInstaFollowers();

  db.get("Instagram")
    .push({
      date: Date.now(),
      followers: followers,
      following: following,
      posts: posts
    })
    .write();
  console.log("Done!");
}

export { getInstaFollowers, runCronJob };
