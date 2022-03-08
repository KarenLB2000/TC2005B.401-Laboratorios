// Laboratorio 13.
const path = require('path');
const Game = require('../models/game');

exports.get_juegos = (request, response, next) => {
    response.render('juegos.ejs');
};

exports.post_juegos = (request, response, next) => {
    const game = new Game(request.body.nombre);
    game.save();
    response.redirect('/fe');
};

exports.imagenes = (request, response, next) => {
    response.render('imagenes.ejs');
};

exports.videos = (request, response, next) => {
    response.render('videos.ejs');
};

exports.preguntas = (request, response, next) => {
    response.render('preguntas.ejs');
};

exports.avogado6 = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'public', 'avogado6.html'));
};

exports.inicio = (request, response, next) => {
    response.render('index.ejs', {games: Game.fetchAll()});
};