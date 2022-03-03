// Laboratorio 11. Express.
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const rutas_fe = require('./routes/fe.routes');

app.use('/fe', rutas_fe);

app.listen(3000);