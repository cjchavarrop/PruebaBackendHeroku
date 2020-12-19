const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.login = async(req, res, next) => { //El next lo utilizamos para que no se nos pegue cumpla o no cumpla
    try{
        const user = await models.User.findOne({where: {email: req.body.email}})  //Ponemos una consulta que seria el where   en donde miramos si el usuario existe en la base de datos
                    // La consulta es, en la base de datos el campo se llama email, que me coincida con el el que viene en el body que tambien se llama email
        if(user){
            const passwordIsValid = bcrypt.compareSync(req.body.password , user.password);  // Validamos que el usuario al ingresar la contraseña sea igual a la almacenada encriptada
                                            // bcrypt.compareSync recibe primer argumento contraseña sin encriptar y el segundo contraseña encriptada
            if(passwordIsValid){
                const token = jwt.sign({  // La firma del token compuesto por todos los elementos que queramos que desde el front se conozcan del usuario
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    rol: user.rol
                },'config.secret',{ // La llave secreta, con esta es que el front va a poder decodificar el token. Sin el no podria entender el token dado que le llega
                                        // codificado con letras y numeros
                    expiresIn: 86400  // Le incluimos el tiempo en el que expira el token, va en segundo (86400 es todo el dia)
                }
                );
                res.status(200).send({  // Respuesta 200 satisfactoria, enviamos lo que queramos para el front
                    auth: true,
                    tokenReturn: token,  //tokenReturn tiene el mismo nombre que le pusimos al front en donde tomamos el token
                    user: user   // No seria necesario porque en el token ya lo tenemos pero en el front lo configuramos asi
                })
            }else{
                res.status(401).json({  // Error 401 ingreso mal la autenticación
                    error: 'Error en el usuario o contraseña'  // Ponemos un error generico para no dar tips si el usuario ya existe
                })
            }
        }else{
            res.status(404).json({
                error: 'Error en el usuario o contraseña'
            })
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error->' + error  // Error 500 es que no se pudo conectar al servidor
        })
        next(error);  // Si no colocamos el next se bloquea si tiene error
    }
};

exports.register = async(req, res, next) => {
    try{

    }catch{

    }
};