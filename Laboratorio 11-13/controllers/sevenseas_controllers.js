// Laboratorio 18. 
const Manga = require('../models/manga');
const Novel = require('../models/novela');
const Comic = require('../models/comic');

exports.manga = (request, response, next) => {
    Manga.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('manga.ejs', {
                ultimo_manga: request.cookies.ultima_serie ? request.cookies.ultima_serie : '',
                fecha_manga: request.cookies.ultima_serieF ? request.cookies.ultima_serieF : '',
                mangas: rows,
                home: 0
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
                novelas: rows,
                home: 0
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
                home: 0
            }); 
        })
        .catch(err => {
            console.log(err);
        });
};

exports.buscar_novela = (request, response, next) => {
    Novel.match(request.params.valor)
        .then(([rows, fieldData]) => {
            response.status(200).json(rows);
        })
        .catch(err => {
            console.log(err);
        });
}; 

exports.comic = (request, response, next) => {
    Comic.fetchOne()
        .then(([rows, fieldData]) => {
            response.render('comic.ejs', {
                comic: rows,
                home: 0
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
                comic: rows,
                home: 0
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
    response.render('series.ejs', {
        home: 0
    });
};

exports.post_series = (request, response, next) => {
    const manga = new Manga(
        request.body.titulo, request.body.descripcion, 
        request.body.autor, request.body.artista, 
        request.file.filename);
    
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let d = "";
        
    if((month < 10) && (day < 10)){
        d = "0" + day + "-0" + month + "-" + year;
    } else {
        d = day + "-" + month + "-" + year;
    }

    response.setHeader('Set-Cookie', 'ultima_serie=' + manga.titulo + '; HttpOnly');
    response.setHeader('Set-Cookie', 'ultima_serieF=' + d + '; HttpOnly');

    manga.save()
        .then(()=> {
            response.redirect('/sevenseas/manga'); 
        }).catch((error)=>{
            console.log(error);
        });
};

exports.preguntas = (request, response, next) => {
    response.render('preguntas.ejs', {
        home: 0
    });
};

exports.breakingbad = (request, response, next) => {
    response.render('quotes.ejs', {
        home: 0
    });
};


exports.home = (request, response, next) => {
    response.render('home.ejs', {
        username: request.session.username,
        home: 1
    });
};