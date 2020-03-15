/**
 * Data.js is the bottom of the component tree.
 *
 * the issue that halted progress on this was the fact of the formatting of the 'scrapes' state value.
 *
 * or it would render but break later.
 *
 * Chrome says its an array but I cannot map the array or manipulate it.
 *
 */

import { useContext } from "react";

import { ScrapeContext } from "../components/Page";

export default function Data() {
  /*
  chrome keeps telling me its an array but react won't let me render the data 
  Ask StackOverflow or find somebody on instagram who can help!!! 
  or go to the Sac Meetup after work on the way back to the Bay in Elk Grove
  */
  const userData = useContext(ScrapeContext);
  return (
    <div>
      <h3>Your Data: </h3>
      {userData ? (
        <h3>Follower Count: {userData.Diego}</h3>
      ) : (
        // ? userData.map(data => {
        //     <li key={data.date}>
        //       Following: {data.following} Posts: {data.posts} Followers:
        //       {data.followers}
        //     </li>;
        //   })
        console.log(String.toString(userData))
      )}
      {/**second undefined */}
    </div>
  );
}
