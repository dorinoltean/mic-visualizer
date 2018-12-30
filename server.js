const express = require('express')
const fs = require('fs')
const app = express()
let PORT = process.env.DS_PORT || 443;

var server = require('https').createServer({
  key: fs.readFileSync(process.env.DS_KEY || 'key.pem'),
  cert: fs.readFileSync(process.env.DS_CERT || 'cert.pem')
}, app);

app.get('/', (req, res) => res.sendFile(__dirname +'\\index.html'))
app.get('/bundle.js', (req, res) => res.sendFile(__dirname +'\\dist\\bundle.js'))

server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))