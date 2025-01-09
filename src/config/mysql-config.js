const fs = require('fs');

const config = {
    development: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'database_dev',
        dialect: 'mysql',
        dialectOptions: {
            bigNumberString: true,
        }
    },
    test: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root', // CI_DB_USERNAME
        password: 'password', // CI_DB_PASSWORD
        database: 'database_dev', // CI_DB_NAME
        dialect: 'mysql',
        dialectOptions: {
            bigNumberString: true,
        }
    },
    production: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root', // PROD_DB_USERNAME
        password: 'password', // PROD_DB_PASSWORD
        database: 'database_dev', // PROD_DB_NAME
        dialect: 'mysql',
        dialectOptions: {
            bigNumberString: true,
            ssl: {
                ca: fs.readFileSync(__dirname + '/mysql-ca-main.crt'),
            }
        }
    }
}

module.exports = config;