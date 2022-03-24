// Laboratorio 17.
const Manga = require('../models/manga');
const Novel = require('../models/novela');
const Comic = require('../models/comic');

exports.manga = (request, response, next) => {
    Manga.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('manga.ejs', {
                mangas: rows
            }); 
        })
        .catch(err => {
            console.log(err);
        }); 
};

exports.novela = (request, response, next) => {
    Novela.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('novela.ejs', {
                novelas: rows
            }); 
        })
        .catch(err => {
            console.log(err);
        }); 
};

exports.comic = (request, response, next) => {
    Comic.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('comic.ejs', {
                comics: rows
            }); 
        })
        .catch(err => {
            console.log(err);
        }); 
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