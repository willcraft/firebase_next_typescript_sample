const functions = require('firebase-functions');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev, conf: { distDir: './dist' }})
const handle = nextApp.getRequestHandler()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl) // log the page.js file that is being requested
  // res.send("Hello from Firebase!!!!");
  return nextApp.prepare().then(() => handle(req, res))
});
