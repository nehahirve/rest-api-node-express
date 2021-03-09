//THIRD PARTY DEPENDENCIES
const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({ message: 'orders were fetched' })
})

router.post('/', (req, res, next) => {
  console.log(req.body)
  res.status(201).json({ message: 'an order was created' })
})

router.get('/:id', (req, res, next) => {
  res
    .status(200)
    .json({ message: 'single order was fetched', OrderId: req.params.id })
})

router.delete('/:id', (req, res, next) => {
  res
    .status(200)
    .json({ message: 'single order was deleted', OrderId: req.params.id })
})

module.exports = { router }
