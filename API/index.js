const express = require('express');
const mongoose = require('mongoose');
const routers = require('./routers');
const bodyParser = require('body-parser');

//crear el servidor 
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false, 
})

//Habilitando el bodyParser 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true}))

//usando las rutas 
app.use('/', routers())



//puerto y arrancar el servidor 
app.listen(4000, ()=>{
    console.log("funcionando el server")
})