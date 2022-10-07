const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/ProdutoController')

//controller

router.get('/', ProdutoController.showProdutos)


module.exports = router