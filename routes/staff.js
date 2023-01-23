const express = require('express')
const router = express.Router()
const db = require('../models')


router.get('/all', (req, res) => {
    res.send("This is all staff routes")
})

module.exports = router 