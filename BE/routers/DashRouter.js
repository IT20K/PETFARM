const express = require('express')
const router = express.Router()
const DashController = require('../controllers/dashControllers')
router.use('/', DashController.Index)
module.exports = router