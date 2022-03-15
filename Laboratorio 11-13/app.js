// Laboratorio 11 - 13.
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const rutas_fe = require('./routes/fe.routes.js');
const rutas_usuario = require('./routes/usuario.routes.js');
path = require('path');

const app = express();

// Configuración EJS.
app.set('view engine', 'ejs');
app.set('views', 'views');

// Inclusión de archivos estáticos (public).
app.use(express.static(path.join(__dirname, 'public')));

// Paquetes Node.js.
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: 'ealckeoialsdfoiahswgrjbvroilancoelawiulgneqwlsvkijihkjabceuabsdeakvlrisjc', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use('/fe', rutas_fe);
app.use('/usuario', rutas_usuario);

app.listen(3000);

// Error 404.
/*app.get('*', (request, response, next) => {
    console.log('Error de acceso a la ruta');
    response.status(404);  
    let respuesta = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Laboraotio 12</title></head><body><h1>FE | Sitio no encontrado.</h1><p>Lo siento, el elemento que buscas no existe. Para acceder a la magia de Fire Emblem, intenta tu suerte con la ruta: /fe</p></body>';
    response.send(respuesta);
});*/