// Laboratorio 11. Express. (Rutas /fe)
const express = require('express');

const router = express.Router();

const games  = ["FE: Shadow Dragon and the Blade of Light", "FE Gaiden", "FE: Mystery of the Emblem"];

router.get('/juegos', (request, response, next) => {
    console.log('GET /capybaras/nuevo');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Capybaras</title><meta charset="utf-8"></head><body><h1 id="principal">Este sitio es de capybaras</h1><h2>Aquí nacen los capybaras:</h2><form action="/capybaras/nuevo" method="POST"><label for="nombre">Nombre: </label><input type="text" id="nombre" name="nombre" placeholder="Pedro"><br><br><input type="submit" value="Enviar"></form><br><br><a href="/capybaras">Regresar a la lista de capybaras</a></body></html>';
    response.send(respuesta); 
});

router.post('/juegos', (request, response, next) => {
    console.log('POST /capybaras/nuevo');
    console.log(request.body);
    capybaras.push(request.body.nombre);
    response.redirect('/capybaras');
});

router.use('/imagenes', (request, response, next) => {
    console.log('Ruta /fe/imagenes');  
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="UTF-8"><title>Laboratorio 10</title></head><body><h1>Fire Emblem</h1><p>Fire Emblem es una franquicia de videojuegos del género rol ';
    respuesta += 'táctico desarrollada por Intelligent Systems,diseñada por Shouzou Kaga y distribuida por Nintendo. Fire Emblem se caracteriza por la mezcla de los géneros de estrategia y rol, por ser pioneros en este tipo de juegos ';
    respuesta += 'y por tener una gran influencia del folclore medieval europeo (<a href="https://es.wikipedia.org/wiki/Fire_Emblem">Wikipedia</a>.)</p><p>A continuación, se muestra un listado de los juegos que han salido a la ';
    respuesta += 'venta desde la aparición de la franquicia:</p><ul style="list-style-type:square">';
    respuesta += '</ul><a href="/fe/juegos">Actualizar lista de juegos.</a><br><a href="/fe/imagenes">Visitar galería de imágenes.</a><br><a href="/fe/videos">Vídeos de la saga.</a></body>';
    response.send(respuesta);
});

router.use('/', (request, response, next) => {
    console.log('Ruta /fe');  
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="UTF-8"><title>Laboratorio 10</title></head><body><h1>Fire Emblem</h1><p>Fire Emblem es una franquicia de videojuegos del género rol ';
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