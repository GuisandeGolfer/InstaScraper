/*
  Our second to highest component in our application: 

    This component is where we will be using useEffect (replacement for ComponentDidMount() / ComponentDidUpdate() )
    && utilizing the Context.Provider that we created in ScrapeContext.js

    useScrapes() ==> play-by-play: 
      creates local state for an instagram array value
      helper function definition that:
        fetches data from backend/data express route
        awaits data into json
        ~ puts data into an array ?? ==> 'doesn't data already arrive as an array' if not: change that 
        sets instagram to new array ('is the state now an array within an array?')
        calls the helper function within the new useEffect. 

        Page functional component ==> structure:
          assign scrapes to the return value of UseScrapes('scrapes local state')
          insert the scrapes into the Context.Provider. 
*/

import { useEffect, useState } from "react";

export const ScrapeContext = React.createContext();

function useScrapes() {
  const [scrapes, setScrapes] = useState({
    instagram: []
  });
  async function fetchScrapes() {
    console.log("Mounting or Updating");
    // const res = await fetch("http://localhost:2093/data");
    // const data = await res.json();
    let scrapes = { Diego: 500 };
    setScrapes(scrapes);
  }
  useEffect(() => {
    fetchScrapes();
  }, []);

  return scrapes;
}

export default function Page({ children }) {
  const scrapes = useScrapes();
  console.log(scrapes);
  return (
    <ScrapeContext.Provider value={scrapes}>
      <div className="page">{children}</div>
    </ScrapeContext.Provider>
  );
}
