// THIRD PARTY DEPENDENCIES
const express = require('express')

const app = express()

app.use(express.json())

app.get('/products', (req, res, next) => {
  res.status(200).json({ response: 'this works' })
})

app.post('/products', (req, res, next) => {
  console.log(req.body)
  res.status(200).json('success')
})

module.exports = app
