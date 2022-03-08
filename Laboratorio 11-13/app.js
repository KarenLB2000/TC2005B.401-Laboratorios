// Laboratorio 11 - 13.
const express = require('express');
const bodyParser = require('body-parser');
const rutas_fe = require('./routes/fe.routes.js');
path = require('path');

const app = express();

// Configuración EJS.
app.set('view engine', 'ejs');
app.set('views', 'views');

// Inclusión de archivos estáticos (public).
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/fe', rutas_fe);

app.listen(3000);

/*app.get('*', (request, response, next) => {
    console.log('Error de acceso a la ruta');
    response.status(404);  
    let respuesta = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Laboraotio 12</title></head><body><h1>FE | Sitio no encontrado.</h1><p>Lo siento, el elemento que buscas no existe. Para acceder a la magia de Fire Emblem, intenta tu suerte con la ruta: /fe</p></body>';
    response.send(respuesta);
});*/