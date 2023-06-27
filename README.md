# Barkapedia-Front-End

Barkapedia is a lifestyle web app that enables users to find safe spaces to walk their dogs. Written in Typescript (built using 5.1.3). Otherwise, the project uses:

* axios (built using 1.4.0)
* firebase (built using 9.22.2)
* leaflet (built using 1.9.4)
* react-dom (built using 18.2.0)
* react-icons (built using 4.9.0)
* react-leaflet (built using 4.2.1)
* react-router-dom (built using 6.12.1)
* react (built using 18.2.0)
* styled-components (built using 5.3.11)
* vite (built using 4.3.9)

The above versions can be considered the minimal supported versions. In practice, earlier versions may work, however I advise making sure that you are using at least the above to avoid issues.

## Hosting

This server is hosted via render and is available [https://nc-be-games-puql.onrender.com](https://barkapedia.netlify.app/).

## Back End

This back end is hosted on GitHub with the [Barkapedia Back End repository](https://github.com/dafyddhenke/Barkapedia-Back-End).

## Setup 

The project uses Firebase. More specifically, the "nc-parks". This is confirmed in the `.firebaserc` file. If you are using your own Firebase server, you will need to update this document. For example:

```
{
  "projects": {
    "default": "nc-parks"
  }
}
{
  "projects": {
    "default": "your-project-name"
  }
}
```

You will also need to generate an Firebase config and API key for the front-end to use. 

This can be found on the project settings page. For more information, see [Google - Download Firebase config file or object](https://support.google.com/firebase/answer/7015592?hl=en#zippy=%2Cin-this-article). 

You will need to update the `Firebase.ts` file with your own config data.

## Running Locally 

The React front-end can be initalised with `npm run dev`. 

If you are getting no data and you don't understand why, try using Insomnia to see if the endpoint if working. If you are getting 404 errors, check whetherh your emulated database has been seeded.

This can be done with `ts-node ./db/seed/runSeed` from the root of your *back-end* project folder.`. Remember that to get things working on the back-end, you must do the following: 

1. start the Firebase emulators (using Firestore and Firebase Auth) using `firebase emulators:start`.
2. start the local server using `ts-node listen.ts`.
3. seed the database with `ts-node db/seed/runSeed.ts`.

This is easier done by having some terminal windows in the background, if you don't want to clutter your VSCode window. 
