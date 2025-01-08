import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import {routes} from "./routes/routes.js";
import envConfig from "./config/env.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(routes)

app.listen(envConfig.port, () => {
    console.log(`Listening on port ${envConfig.port}`);
})