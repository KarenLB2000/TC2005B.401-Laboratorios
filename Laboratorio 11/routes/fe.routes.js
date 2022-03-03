// Laboratorio 11. Express. (Rutas /fe)
const express = require('express');

const router = express.Router();

const games  = ["FE: Shadow Dragon and the Blade of Light", "FE Gaiden", "FE: Mystery of the Emblem"];

var fs = require('fs');

router.get('/juegos', (request, response, next) => {
    console.log('GET /fe/juegos');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="UTF-8"><title>Laboratorio 11</title></head><body><h1>Juegos de Fire Emblem</h1><p>Para completar la lista de juegos, introduce algún título no listado anteriormente:</p>';
    respuesta += '<form action="juegos" method="POST"><label for="nombre">Título: </label> <input type="text" id="nombre" name="nombre" placeholder="FE Heroes"><input type="submit" value="Actualizar"></form><br><a href="/fe">Regresar a Inicio.</a></body>';
    response.send(respuesta);
});

router.post('/juegos', (request, response, next) => {
    console.log('POST /fe/juegos');
    console.log(request.body);
    games.push(request.body.nombre);
    let titulo = request.body.nombre + '\r\n';
    fs.writeFile('laboratorio.txt', titulo, { flag: 'a+' }, (err) => {
        console.log('Juego guardado en laboratorio.txt');
    });
    response.redirect('/fe');
});

router.use('/imagenes', (request, response, next) => {
    console.log('Ruta /fe/imagenes');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="UTF-8"><title>Laboratorio 11</title></head><body><h1>Galería de Fire Emblem</h1>';
    respuesta += '<p><img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_FireEmblemThreeHouses_image1600w.jpg" alt="FE Three Houses" height="300">&emsp;';
    respuesta += '<img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_FireEmblemWarriorsThreeHopes_image1600w.jpg" alt="FE Three Hopes" height="300"></p>';
    respuesta += '<p><img src="https://cdn.wallpapersafari.com/86/27/nW9CVt.png" alt="FE Fates" height="300">&emsp; <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_3ds_25/SI_3DS_FireEmblemAwakening_image1600w.jpg"';
    respuesta += 'alt="FE Awakening" height="300"></p><a href="/fe">Regresar a Inicio.</a></body>';
    response.send(respuesta);
});

router.use('/videos', (request, response, next) => {
    console.log('Ruta /fe/videos');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="UTF-8"><title>Laboratorio 11</title></head><body><h1>Vídeos de Fire Emblem</h1>';
    respuesta += '<iframe width="900" height="506" src="https://www.youtube.com/embed/cZyZB-Zjxxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    respuesta += '<iframe width="900" height="506" src="https://www.youtube.com/embed/TrtXqaph-44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    respuesta += '<br><a href="/fe">Regresar a Inicio.</a></body>';
    response.send(respuesta);
});

router.use('/', (request, response, next) => {
    console.log('Ruta /fe');  
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="UTF-8"><title>Laboratorio 11</title></head><body><h1>Fire Emblem</h1><p>Fire Emblem es una franquicia de videojuegos del género rol ';
    respuesta += 'táctico desarrollada por Intelligent Systems,diseñada por Shouzou Kaga y distribuida por Nintendo. Fire Emblem se caracteriza por la mezcla de los géneros de estrategia y rol, por ser pioneros en este tipo de juegos ';
    respuesta += 'y por tener una gran influencia del folclore medieval europeo (<a href="https://es.wikipedia.org/wiki/Fire_Emblem">Wikipedia</a>.)</p><p>A continuación, se muestra un listado de los juegos que han salido a la ';
    respuesta += 'venta desde la aparición de la franquicia:</p><ul style="list-style-type:square">';
    for (let i in games) {
        respuesta += '<li>' + games[i] + '</li>';
    }
    respuesta += '</ul><a href="/fe/juegos">Actualizar lista de juegos.</a><br><a href="/fe/imagenes">Visitar galería de imágenes.</a><br><a href="/fe/videos">Vídeos de la saga.</a></body>';
    response.send(respuesta);
});

module.exports = router;