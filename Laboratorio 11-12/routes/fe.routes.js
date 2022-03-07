// Laboratorio 11 - 12.
const express = require('express');

const router = express.Router();

const games  = [
    {titulo: "FE: Shadow Dragon and the Blade of Light"},
    {titulo: "FE Gaiden"},
    {titulo: "FE: Mystery of the Emblem"}
];


var fs = require('fs');

// Devolución de un archivo HTML (path).
router.get('/juegos', (request, response, next) => {
    response.render('juegos.ejs');
});

router.post('/juegos', (request, response, next) => {
    games.push({titulo: request.body.nombre});
    response.redirect('/fe');
});

router.use('/imagenes', (request, response, next) => {
    response.render('imagenes.ejs');
});

router.use('/videos', (request, response, next) => {
    response.render('videos.ejs');
});

router.use('/json', (request, response, next) => {
    response.render('json.ejs');
});

router.use('/avogado6', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'avogado6.html'));
});


router.use('/', (request, response, next) => {
    response.render('index.ejs', {games: games});
});

module.exports = router;