const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello CI/CD with Docker!</h1><hr><p>Adding Watchtower to monitor Docker Hub</p>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})