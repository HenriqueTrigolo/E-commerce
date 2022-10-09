const Produto = require('../models/Produto')
const Whisky = require('../models/Whisky')
const Vinho = require('../models/Vinho')
const Vodka = require('../models/Vodka')
const Cerveja = require('../models/Cerveja')
const NaoAlcoolica = require('../models/NaoAlcoolica')

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

    static async showVodka(req, res){
        const vodkasData = await Vodka.findAll()

        const todosVodkas = vodkasData.map((result) => result.get({plain: true}))

        res.render('produtos/vodkas', {todosVodkas})
    }

    static async showCerveja(req, res){
        const cervejaData = await Cerveja.findAll()

        const todosCervejas = cervejaData.map((result) => result.get({plain: true}))

        res.render('produtos/cerveja', {todosCervejas})
    }
    
    static async showNaoAlcoolica(req, res){
        const NAData = await NaoAlcoolica.findAll()

        const todosNAs = NAData.map((result) => result.get({plain: true}))

        res.render('produtos/naoAlcoolica', {todosNAs})
    }
}