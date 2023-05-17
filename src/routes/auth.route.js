import * as controllers from "../controllers";

import express from "express";
const route = express.Router();

route.get('/test', (req, res) => {
    res.status(200).send('test my route');
})
route.post('/register', controllers.register);
route.post('/login', controllers.login);


module.exports = route;