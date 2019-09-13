import { getHTML, getInstaFollowers } from "./lib/scraper";

async function go() {
  //grabs the HTML of the page
  const count = await getInstaFollowers(
    await getHTML("https://www.instagram.com/delargo86/")
  );

  console.log(`You have ${count} followers on Instagram`);
}

go();
