const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/data/database.db'
  });

const Weather = require('./Weather')(sequelize)

module.exports = {
    sequelize,
    Weather
}







