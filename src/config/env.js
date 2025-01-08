import dotenv from 'dotenv'

dotenv.config()


export default {
    port: process.env.PORT || 3000,
    database_file: process.env.DATABASE_FILE || './database.sqlite',
}