const app = require('./app')
const envConfig = require("./config/env");

app.listen(envConfig.port, () => {
    console.log(`*-Service listening on port :${envConfig.port}`);
})