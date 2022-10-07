const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')

//controller

router.get('/login', AuthController.login)
router.get('/registrar', AuthController.register)


module.exports = router