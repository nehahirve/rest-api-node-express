//THIRD PARTY DEPENDENCIES
const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({ message: 'get request went through' })
})

router.post('/', (req, res, next) => {
  console.log(req.body)
  res.status(201).json({ message: 'post request went through' })
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  if (id === 'special') {
    res.status(200).json({ message: 'you discovered the special id', id })
  } else {
    res.status(200).json({
      message: 'you passed an id'
    })
  }
})

router.patch('/:id', (req, res, next) => {
  const id = req.params.id
  res.status(200).json({ message: 'updated prodcuts', id })
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  res.status(200).json({ message: 'deleted prodcuts', id })
})

module.exports = { router }
