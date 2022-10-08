const Produto = require('../models/Produto')
const Whisky = require('../models/Whisky')
const Vinho = require('../models/Vinho')

module.exports = class ProdutoController{
    
    static showProdutos(req, res){
        res.render('produtos/all')
    }

    static async showVinhos(req, res){

        const vinhosData = await Vinho.findAll()

        const todosVinhos = vinhosData.map((result) => result.get({plain: true}))

        res.render('produtos/vinhos', {todosVinhos})
    }

    static async showWhisky(req, res){
        const whiskiesData = await Whisky.findAll()

        const todosWhiskies = whiskiesData.map((result) => result.get({plain: true}))

        res.render('produtos/whiskies', {todosWhiskies})
    }

}