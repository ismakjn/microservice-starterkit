
const {sutando, Model} = require('sutando');
const sqliteConfig = require('../config/sqlite-config')

const dbConfig = sqliteConfig[process.env.NODE_ENV || 'development'];


const initConnection = () => {
    sutando.addConnection({
        client: 'sqlite3',
        connection: {
            filename: dbConfig.storage,
            database: process.env.NODE_ENV === "test" ? ":memory:" : dbConfig.storage
        },
        useNullAsDefault: true,
    })

    // sutando.addConnection({
    //     client: 'sqlite3',
    //     connection: {
    //         filename: './dev/dev.sqlite'
    //     },
    //     useNullAsDefault: true,
    // }, process.env.NODE_ENV)
}

initConnection();

const db = sutando.connection()
const Schema = db.schema

module.exports = {
    sutando,
    db,
    Schema,
    initConnection,
}