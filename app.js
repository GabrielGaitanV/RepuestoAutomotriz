//requerimos paquetes anteriormente descargados
const fs = require('fs')
const path =  require('path');

//requerimos express para su uso
const express = require('express');
const app = express();//Declaramos app que es la variable que usara express

//puerto donde se situara el local
const port = 3007;

//Requerimiento de la ruta
const indexRouter = require('./routes/indexRouter.js');

//motor de plantilla
app.set('view engine','ejs');

//Uso de express para visualizacion de ruta
app.use('/', indexRouter);

// Uso de los recursos estaticos de public
app.use(express.static(path.join(__dirname,'/public')));

//Puesta en marcha del servidor
app.listen(port, () => console.log('Servidor REAUT ONLINE'));