const Sequelize = require('sequelize');

const sequelize = new Sequelize('biblioteca', 'root', '6558',{
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
})

module.exports = {
    sequelize:sequelize
}