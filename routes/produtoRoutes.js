const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/ProdutoController')

//controller

router.get('/', ProdutoController.showProdutos)
router.get('/vinhos', ProdutoController.showVinhos)
router.get('/whiskies', ProdutoController.showWhisky)



module.exports = router