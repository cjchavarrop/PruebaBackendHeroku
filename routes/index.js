const router = require('express').Router();   //Traemos el router de express para manejar las rutas
const apiRouterUser = require('./api/users');

router.use('/user', apiRouterUser);

module.exports = router;