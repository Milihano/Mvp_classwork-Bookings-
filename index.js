require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.APP_PORT

const booking = require('./routes/bookingroutes')




app.use(booking)
app.use(bodyParser.json())





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})