const Sequelize = require("sequelize");
const sequilize = require("../util/db")
const order = sequilize.define('order',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
    },
    username:Sequelize.STRING,
    email:Sequelize.STRING,
    amount:Sequelize.STRING,
    quantity:Sequelize.STRING,
    offer:Sequelize.STRING,
})

module.exports = order
