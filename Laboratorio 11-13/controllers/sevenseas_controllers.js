// Laboratorio 17.
const Manga = require('../models/manga');
const Novel = require('../models/novela');
const Comic = require('../models/comic');

exports.manga = (request, response, next) => {
    response.render('manga.ejs');
};

exports.novela = (request, response, next) => {
    response.render('novela.ejs');
};

exports.comic = (request, response, next) => {
    response.render('comic.ejs');
};

exports.get_series = (request, response, next) => {
    response.render('series.ejs');
};

exports.post_series = (request, response, next) => {
    const manga = new Manga(request.body.nombre);
    manga.save()
    .then(()=> {
        response.redirect('/manga'); 
    }).catch((error)=>{
        console.log(error);
    });
};

exports.preguntas = (request, response, next) => {
    response.render('preguntas.ejs');
};

exports.home = (request, response, next) => {
    response.render('home.ejs');
};