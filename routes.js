const router = require('express').Router()
const { processDate } = require('./controllers')

router.get('/:date_string?', processDate)

module.exports = router