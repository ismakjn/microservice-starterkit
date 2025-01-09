const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes/routes');
const envConfig = require('./config/env');
const sequelize = require('./config/sequelize');


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(routes)

sequelize.sync({force: true}).then(() => {
    app.listen(envConfig.port, () => {
        console.log(`Listening on port ${envConfig.port}`);
    })
})
