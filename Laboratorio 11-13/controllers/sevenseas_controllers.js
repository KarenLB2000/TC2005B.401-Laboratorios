// Laboratorio 17.
const Manga = require('../models/manga');
const Novel = require('../models/novela');
const Comic = require('../models/comic');

exports.get_manga = (request, response, next) => {
    response.render('juegos.ejs');
};

exports.post_juegos = (request, response, next) => {
    const game = new Game(request.body.nombre);
    game.save();
    response.setHeader('Set-Cookie', 'ultimo_juego='+ game.titulo + '; HttpOnly');
    response.redirect('/fe');
};

exports.preguntas = (request, response, next) => {
    response.render('preguntas.ejs');
};

exports.home = (request, response, next) => {
    console.log(request.cookies);
    response.render('home.ejs', {games: Game.fetchAll()});
};