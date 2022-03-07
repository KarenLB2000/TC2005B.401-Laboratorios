// Laboratorio 11. Express.
const express = require('express');
const app = express();
path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

// Inclusión de archivos estáticos (public).
app.use(express.static(path.join(__dirname, 'public')));

// Configuración EJS.
app.set('view engine', 'ejs');
app.set('views', 'views');

const rutas_fe = require('./routes/fe.routes.js');

app.use('/fe', rutas_fe);

app.get('*', (request, response, next) => {
    console.log('Error de acceso a la ruta');
    response.status(404);  
    let respuesta = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Laboraotio 12</title></head><body><h1>FE | Sitio no encontrado.</h1><p>Lo siento, el elemento que buscas no existe. Para acceder a la magia de Fire Emblem, intenta tu suerte con la ruta: /fe</p></body>';
    response.send(respuesta);
});

app.listen(3000);