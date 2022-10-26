const express = require('express')
const bookingRoute = express.Router()
const {booking} = require('../controllers/booking')


bookingRoute.post('/bookingentry',booking)



module.exports = bookingRoute