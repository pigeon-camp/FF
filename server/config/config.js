require('dotenv').config();
const path = require('path');

module.exports.development = {
  dialect: 'mysql',
  seederStorage: 'sequelize',
  url: process.env.DB_URL
}

module.exports.product = {
  dialect: 'mysql',
  seederStorage: 'sequelize',
  url: process.env.DB_URL
}