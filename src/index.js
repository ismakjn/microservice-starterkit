import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {routes} from "./routes/routes.js";
import envConfig from "./config/env.js";
import {sequelize} from './config/sequelize.js'

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
