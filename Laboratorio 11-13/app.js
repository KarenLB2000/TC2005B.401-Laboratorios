// Laboratorio 11 - 18.
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const csrf = require('csurf');
const csrfProtection = csrf();
const multer = require('multer');
const rutas_sevenseas = require('./routes/sevenseas.routes.js');
const rutas_usuario = require('./routes/usuario.routes.js');
path = require('path');

const app = express();

// Configuración EJS.
app.set('view engine', 'ejs');
app.set('views', 'views');

// Inclusión de archivos estáticos (public).
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Paquetes Node.js.
app.use(bodyParser.urlencoded({extended: false}));

// Configuración multer (manejo de archivos).
//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().getTime() + '-' + file.originalname);
    },
});

app.use(multer({ storage: fileStorage }).single('imagen')); 

app.use(cookieParser());
app.use(session({
    secret: 'ealckeoialsdfoiahswgrjbvroilancoelawiulgneqwlsvkijihkjabceuabsdeakvlrisjc', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(csrfProtection); 

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

app.use('/sevenseas', rutas_sevenseas);
app.use('/usuario', rutas_usuario);

app.use((request, response, next) => {
    response.redirect('/usuario/login');
    next();
});

app.listen(3000);

// Error 404.
/*app.get('*', (request, response, next) => {
    console.log('Error de acceso a la ruta');
    response.status(404);  
    let respuesta = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Laboratorios TC2005B</title></head><body><h1>FE | Sitio no encontrado.</h1><p>Lo siento, el elemento que buscas no existe. Para acceder a la magia de Fire Emblem, intenta tu suerte con la ruta: /fe</p></body>';
    response.send(respuesta);
});*/