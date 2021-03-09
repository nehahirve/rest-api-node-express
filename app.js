// THIRD PARTY DEPENDENCIES
const express = require('express')
// LOCAL DEPENDENCIES
const products = require('./routes/products')

const app = express()

app.use(express.json())

app.use(products.router)

module.exports = app
