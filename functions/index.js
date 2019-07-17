const functions = require('firebase-functions');
const express = require('express');
const next = require('next');

// const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev, conf: { distDir: './dist' }})
const handle = nextApp.getRequestHandler()

const server = express()

server.get('/post/:id', (req, res) => {
  return nextApp.render(req, res, '/post', { id: req.params.id })
})

server.get('*', (req, res) => {
  return nextApp.prepare().then(() => handle(req, res))
})

exports.app = functions.https.onRequest(server);
