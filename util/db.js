const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'sql7370142',
    'sql7370142',
     '4cUkFZcAQM', {
  dialect: 'mysql',
  host: 'sql7.freemysqlhosting.net'
});

module.exports = sequelize;
