const express = require('express')

const router = express.Router()

router.get('/products', (req, res, next) => {
  res.status(200).json({ response: 'this works' })
})

router.post('/products', (req, res, next) => {
  console.log(req.body)
  res.status(200).json('success')
})

module.exports = { router }
