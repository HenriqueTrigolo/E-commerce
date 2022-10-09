const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/ProdutoController')

//controller

router.get('/', ProdutoController.showProdutos)
router.get('/vinhos', ProdutoController.showVinhos)
router.get('/whiskies', ProdutoController.showWhisky)
router.get('/vodkas', ProdutoController.showVodka)
router.get('/cervejas', ProdutoController.showCerveja)
router.get('/naoalcoolicas', ProdutoController.showNaoAlcoolica)



module.exports = router