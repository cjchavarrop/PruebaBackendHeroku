const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes');
const bodyParse = require('body-parser');
const cors = require('cors');

// Instancia de express en mi app
const app = express();


//app.use((req, res, next) =>{
    //res.header('Access-Control-Allow-Origin: *');
    //res.header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    //res.header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    //next();
//});


// Middleware morgan para detectar peticiones
app.use(morgan('dev'));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }))


// Primera ruta. Nuestro manejador. Todos los manejadores van con este formato y orden
app.use('/api', apiRouter)

app.use(cors());


app.set('PORT', process.env.PORT || 3000);  //Podemos setiar un puerto, que es inviarle valores. que despues con un get lo podemos consultar

app.listen(app.get('PORT'), ()=>{  //Todos los manejadores de ruta van en ese formato
    console.log('server up');
});