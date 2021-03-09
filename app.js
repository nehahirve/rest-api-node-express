// THIRD PARTY DEPENDENCIES
const express = require('express')
// LOCAL DEPENDENCIES
const products = require('./routes/products')
const orders = require('./routes/orders')

const app = express()

app.use(express.json())

app.use('/products', products.router)
app.use('/orders', orders.router)

module.exports = app
