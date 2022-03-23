// Laboratorio 17.
const Manga = require('../models/manga.js');
const Novel = require('../models/novela.js');
const Comic = require('../models/comic.js');

exports.inicio = (request, response, next) => {
    console.log(request.cookies);
    response.render('index.ejs', {games: Game.fetchAll()});
};