// Update with your config settings.

module.exports = {
  client: 'sqlite3',
  connection: {
    host: 'localhost',
    database: 'database',
    user:     'user',
    password: 'password'
  },
  migrations: {
    table: 'migrations',
    path: './src/sutando/migrations',
  },
  models: {
    path: './src/sutando/models'
  }
};
