require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.APP_PORT

const bookingRoute = require('./routes/bookingroutes')

app.use(bodyParser.json())


app.use(bookingRoute)






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})