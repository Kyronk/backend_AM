import AuthRoute from './auth.route';
import AnimeRoute from './anime.route';

const initRoute = (app) => {
    app.use('/api/v1/auth', AuthRoute);
    app.use('/api/v1/anime', AnimeRoute);



    app.use('/', (req, res) => {
        return res.send('hello')
    });
};

module.exports = initRoute;