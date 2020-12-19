module.exports = (sequelize, type) => {  //Esto se hace para poderlo trabajar en el modelo principal
    return sequelize.define('usuario', {
        id:{  //Estamos utilizando OMR para que nos ayude a traducir a sql
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: type.STRING,
        email: type.STRING,
        password: type.STRING,
        rol: type.STRING,
    })
}