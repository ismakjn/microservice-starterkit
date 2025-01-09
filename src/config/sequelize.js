const Sequelize = require('sequelize');
const sqliteConfig = require('./sqlite-config');
const env = require('./env')

const dialect = env.database_dialect;

let dbConfig = {}

if (dialect === 'sqlite') {
    dbConfig = sqliteConfig;
}

const options = dbConfig[env.env];

const sequelize = new Sequelize.Sequelize(options);

sequelize
    .authenticate()
    .then(() => console.log('Connected to SQLite successfully'))
    .catch(err => console.error('Unable to connect to SQLite:', err));

module.exports = sequelize;