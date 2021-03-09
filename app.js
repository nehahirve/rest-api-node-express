// THIRD PARTY DEPENDENCIES
const express = require('express')
// LOCAL DEPENDENCIES
const products = require('./routes/products')
const orders = require('./routes/orders')

const app = express()

// app.use(express.json())

app.use('/products', products.router)
app.use('/orders', orders.router)

app.use((req, res, next) => {
  const error = new Error('404 Not found')
  error.status = 404
  next(error)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message
    }
  })
})

module.exports = app
