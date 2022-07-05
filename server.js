const express = require('express')
const cors = require('cors')
const ytdl = require('ytdl-core')
const app = express()
const port = 4000

app.use(cors())

app.get('/download', (req, res) => {
  const URL = req.query.URL
  res.header('Content-Disposition', 'attachment; filename="audio.webm"')

  const isValidURL = ytdl.validateURL(URL)
  
  if (!isValidURL) {
    res.status(404).send({ error: 'Invalid URL' })
    return
  }

  ytdl(URL, {
    filter: 'audioonly',
    quality: 'highestaudio'
  }).pipe(res)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
