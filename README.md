# Barkapedia-Front-End

App about dog walking parks.

## Steps to get local server working

In order to get the connection with the local server, you need to have the following things running. 

1. The React website - use `npm run dev` from the root of your *front-end* project folder.
2. The Firebase emulated database - use `firebase emulators:start` from the root of your *back-end* project folder
3. The Express server -- use `ts-node listen.ts` from the root of your *back-end* project folder.

This is easier done by having some terminal windows in the background, if you don't want to clutter your VSCode window. 

## I'm not getting anything

If you are getting no data and you don't understand why, try using Insomnia to see if the endpoint if working. If you are getting 404 errors, check whetherh your emulated database has been seeded.

This can be done with `ts-node ./db/seed/runSeed` from the root of your *back-end* project folder.`

## Example usage

Below is an example of importing the server and then using a request. 

```
import Header from "./Components/Header";
import server from "./Api/api";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    server.get(`/parks`).then(({ data }) => {
      console.log(data);
    });
  }, []);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
```
