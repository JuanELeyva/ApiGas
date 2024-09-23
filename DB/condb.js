const {Sequelize} = require('sequelize')
const path = require('path')
const config = require('dotenv').config( { path: path.join(__dirname, '..', '.env') })



const conBD = new Sequelize(config.parsed.db,config.parsed.usuario,config.parsed.contra,{
    dialect : 'mysql',
    host: config.parsed.host,
    port: config.parsed.puerto,
    pool: {
        max: 5,
        idle: 30000,
        acquire: 60000,
      },
      dialectOptions: {
        options: {
          encrypt: true 
        }
    }
})

module.exports = conBD;
