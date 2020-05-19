# Beams Web Notifications Example
This repository contains a working sample application that uses Beams web notifications.

## What's in this repository
An example server, complete with publishing & user authentication can be found in `server.js`

An example client can be found in `public/index.html`

## How to run this example
1. Download this repository
2. Install dependencies with `yarn` or `npm install`
3. Run the server with `yarn start` or `npm start`
4. Visit `http://localhost:3000` *in Google Chrome* and accept the notification permissions prompt
5. Visit `http://localhost:3000/publish` in another tab
6. Get a push notification!

**Warning: Running this example will authenticate your browser as "alice" with a default Beams instance. Either use your own credentials in `server.js` or remember to remove the notification permission when you're done. Otherwise you may get mysterious notifications from strangers!**
