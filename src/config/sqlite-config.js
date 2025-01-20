const config ={
  "development": {
    "dialect": "sqlite",
    "storage": "./dev/dev.sqlite"
  },
  "test": {
    "dialect": "sqlite",
    "storage": "./dev/dev.test.sqlite"
  },
  "production": {
    "dialect": "sqlite",
    "storage": "./dev/dev.prod.sqlite"
  }
}


module.exports = config;