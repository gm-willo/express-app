const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello CI/CD with Docker!</h1><hr><h2>Adding Watchtower to monitor Docker Hub</h2>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})