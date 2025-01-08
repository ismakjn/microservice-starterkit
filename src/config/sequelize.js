import {Sequelize} from "sequelize";
import dotenv from "dotenv";

dotenv.config();


export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DATABASE_FILE || './database.sqlite',
    logging: false,
});

sequelize
    .authenticate()
    .then(() => console.log('Connected to SQLite successfully'))
    .catch(err => console.error('Unable to connect to SQLite:', err));