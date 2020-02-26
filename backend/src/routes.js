const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.json({ message: `Hello ${req.query.name}` })
})

module.exports = routes