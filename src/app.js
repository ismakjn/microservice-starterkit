const express = require('express');
const cors = require('cors');
require('dotenv').config();
const routes = require('./routes');
const envConfig = require('./config/env');


const app = express();
app.use(express.json());
app.use(cors());

app.use(routes)

module.exports = app;
