import AuthRoute from './auth.route';

const initRoute = (app) => {
    app.use('/api/v1/auth', AuthRoute)




    app.use('/', (req, res) => {
        return res.send('hello')
    })
}

module.exports = initRoute;