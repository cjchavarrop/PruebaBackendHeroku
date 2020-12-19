const Sequelize = require('sequelize');
const UserModel = require('./users');

// De la documentación trajimos la forma de conectarnos a la base de datos
const sequelizeBD = new Sequelize('8cbe90J8yq', '8cbe90J8yq', 'JSKKNqWm7l', {
    host: 'remotemysql.com',
    port: '3306',
    dialect: 'mysql'
  });

const User = UserModel(sequelizeBD, Sequelize);  //Le enviamos los 2 parametros que el modelo Usuario necesita
   // Sequilize en mayuscula es como lo creamos en la aplicación. Es una clase de tipo Sequelize, es una libreria.

sequelizeBD.sync({ force: false })
  .then(()=>{
      console.log('Tablas sincronizadas')
  })

module.exports= {
    User
}

