const router = require('express').Router();
const { User } = require('../../models');
const userController = require('../../controllers/UserController.js');
const bcrypt = require('bcryptjs');


//   api/user/
router.get('/', async(req, res)=>{
    const user = await User.findAll();
    res.status(200).json(user)
});

//  api/user/register
router.post('/register', async(req, res)=>{  //Es un metodo post porque necesitamos enviarle unos datos
    req.body.password = await bcrypt.hashSync(req.body.password, 10); //Numero de veces donde se corre el algoritmo de encriptación normalmente es el 10 pero puede ser cualquiera
    // Lo anterior nos encripta la contraseña
    const user = await User.create(req.body);  // Base User con el metodo create y le colocamos lo que la persona envie en lo que escriba
    res.status(200).json(user);

});

//  api/user/login
router.post('/login', userController.login) // Vamos a realizar utilizando los controllers

module.exports = router;