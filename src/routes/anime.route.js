import * as controllers from '../controllers';

import express from 'express';

const route = express.Router();

route.get("/item_anime/:id", controllers.getItemAnime)
route.get("/test", controllers.createAnime);

// route.get('/test', (req, res) => {
//     res.send('hello from anime route')
// })

module.exports = route;


