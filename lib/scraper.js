import axios from "axios";
import cheerio from "cheerio";

async function getHTML(url) {
  const { data: html } = await axios.get(url);

  return html;
}

async function getInstaFollowers(html) {
  let $ = cheerio.load(html);
  let tag = $("meta[name=description]").attr("content");
  let follower_count = tag.slice(0, 3);

  return follower_count;
}

export { getHTML, getInstaFollowers };
