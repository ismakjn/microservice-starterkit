const app = require('app')
const envConfig = require("./config/env");

app.listen(envConfig.port, () => {
    console.log(`Listening on port ${envConfig.port}`);
})