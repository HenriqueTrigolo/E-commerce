const Produto = require('../models/Produto')

module.exports = class ProdutoController{
    
    static showProdutos(req, res){
        res.render('produtos/all')
    }

}