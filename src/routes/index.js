const express = require('express');

const routes = express.Router();

routes.get("/", (req, res) => {
    return res.send("It works!");
})

routes.get('/test', (req, res) => {
    return res.send('It works!')
})


module.exports = routes;