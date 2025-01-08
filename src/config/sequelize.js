import {Sequelize} from "sequelize";
import dotenv from "dotenv";
import envConfig from "../config/env.js";

dotenv.config();


export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage:  envConfig.database_file || './database.sqlite',
    logging: false,
});

sequelize
    .authenticate()
    .then(() => console.log('Connected to SQLite successfully'))
    .catch(err => console.error('Unable to connect to SQLite:', err));