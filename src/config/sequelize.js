import {Sequelize} from "sequelize";
import sqliteConfig from "./sqlite-config.js";
import env from "./env.js";

const dialect = env.database_dialect;
let dbConfig = {}

if (dialect === 'sqlite') {
    dbConfig = sqliteConfig;
}

const options = dbConfig[env.env];

export const sequelize = new Sequelize(options);

sequelize
    .authenticate()
    .then(() => console.log('Connected to SQLite successfully'))
    .catch(err => console.error('Unable to connect to SQLite:', err));
