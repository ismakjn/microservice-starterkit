const config ={
  "development": {
    "dialect": "sqlite",
    "storage": "./dev/database.sqlite"
  },
  "test": {
    "dialect": "sqlite",
    "storage": "./dev.test.sqlite"
  },
  "production": {
    "dialect": "sqlite",
    "storage": "./dev.prod.sqlite"
  }
}


export default config;