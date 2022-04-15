// Laboratorio 18. 
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
    Novel.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('novela.ejs', {
                novelas: rows
            }); 
        })
        .catch(err => {
            console.log(err);
        }); 
};

exports.novela_filtrada = (request, response, next) => {
    Novel.fetchOne(request.params.id_novela)
        .then(([rows, fieldData]) => {
            response.render('novela.ejs', {
                novelas: rows,
            }); 
        })
        .catch(err => {
            console.log(err);
        });
}; 

exports.comic = (request, response, next) => {
    Comic.fetchOne()
        .then(([rows, fieldData]) => {
            response.render('comic.ejs', {
                comic: rows
            }); 
        })
        .catch(err => {
            console.log(err);
        }); 
};

exports.gmod_comic = (request, response, next) => {
    Comic.fetchOne()
        .then(([rows, fieldData]) => {
            response.render('edicion.ejs', {
                comic: rows
            }); 
        })
        .catch(err => {
            console.log(err);
        }); 
};

exports.pmod_comic = (request, response, next) => {
    const comic = new Comic(
        request.body.titulo, request.body.descripcion, 
        request.body.autor, request.body.artista, 
        request.body.imagen, request.body.genero);
    comic.update(request.body.comicId)
        .then(()=> {
            response.redirect('/sevenseas/comic'); 
        }).catch((error)=>{
            console.log(error);
        });
};

exports.get_series = (request, response, next) => {
    response.render('series.ejs');
};

exports.post_series = (request, response, next) => {
    const manga = new Manga(
        request.body.titulo, request.body.descripcion, 
        request.body.autor, request.body.artista, 
        request.file.filename);
    manga.save()
        .then(()=> {
            response.redirect('/sevenseas/manga'); 
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