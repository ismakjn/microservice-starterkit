const dotenv = require("dotenv");

dotenv.config()


const env = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    database_dialect: process.env.DATABASE_DIALECT || "sqlite",
}

module.exports = env;