const dev = process.env.NODE_ENV !== 'production'
const moduleAlias = require('module-alias')
const express = require('express')

// For the development version, we'll use React.
// Because, it support react hot loading and so on.
if (!dev) {
  moduleAlias.addAlias('react', 'preact-compat')
  moduleAlias.addAlias('react-dom', 'preact-compat')
}

const { parse } = require('url')
const next = require('next')

const app = next({ dev })
const handle = app.getRequestHandler()
const server = express()

app.prepare()
.then(() => {

  server.get('/api/content', (req, res) => {
    res.send({content: "stuff"})
    return
  })

  server.get('/api/content2', (req, res) => {
    res.send({content: "stuff2"})
    return
  })

  server.get('/api/*', (req, res) => {
    res.send({reply: true})
    return
  })

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  })
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
