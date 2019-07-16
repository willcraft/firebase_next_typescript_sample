const functions = require('firebase-functions');
const express = require('express');
const next = require('next');

// const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev, conf: { distDir: './dist' }})
const handle = nextApp.getRequestHandler()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


exports.app = functions.https.onRequest((req, res) => {

  return nextApp.prepare().then(() => {
    const server = express()

    server.get('/posts/:id', (req, res) => {
      return nextApp.render(req, res, '/posts', { id: req.params.id })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    // server.listen(port, err => {
    //   if (err) throw err
    //   console.log(`> Ready on http://localhost:${port}`)
    // })
  });
});
