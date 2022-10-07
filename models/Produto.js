const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Produto = db.define('Produto', {
    title:{
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    price:{
        type: DataTypes.FLOAT,
        require: true,
    },
    description:{
        type: DataTypes.STRING,
        require: true,
    }
})

module.exports = Produto