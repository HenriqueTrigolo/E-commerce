const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Vodka = db.define('Vodka', {
    title:{
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    description:{
        type: DataTypes.STRING,
        require: true,
    },
    price:{
        type: DataTypes.FLOAT,
        require: true,
    },
})

module.exports = Vodka