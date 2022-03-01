// Laboratorio 10. Rutas y formas. - const {method, url} = request;
const games  = ["FE: Shadow Dragon and the Blade of Light", "FE Gaiden", "FE: Mystery of the Emblem"];
const http = require('http');

const server = http.createServer( (request, response) => {
    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="UTF-8">');
        response.write('<title>Laboratorio 10</title>');
        response.write('</head><body>');
        response.write('<h1>Fire Emblem</h1>');
        response.write('<p>Fire Emblem es una franquicia de videojuegos del género rol ');
        response.write('táctico desarrollada por Intelligent Systems,diseñada por Shouzou Kaga ');
        response.write('y distribuida por Nintendo. Fire Emblem se caracteriza por la mezcla de ');
        response.write('los géneros de estrategia y rol, por ser pioneros en este tipo de juegos ');
        response.write('y por tener una gran influencia del folclore medieval europeo ');
        response.write('(<a href="https://es.wikipedia.org/wiki/Fire_Emblem">Wikipedia</a>.)</p>')
        response.write('<p>A continuación, se muestra un listado de los juegos que han salido a la ');
        response.write('venta desde la aparición de la franquicia:</p>');
        response.write('<ul style="list-style-type:square">');
        for (let i in games) {
            response.write('<li>' + games[i] + '</li>');
        }
        response.write('</ul>');
        response.write('<a href="juegos">Actualizar lista de juegos.</a>');
        response.write('<br><a href="imagenes">Visitar galería de imágenes.</a>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/juegos' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="UTF-8">');
        response.write('<title>Laboratorio 10</title>');
        response.write('</head><body>');
        response.write('<h1>Juegos de Fire Emblem</h1>');
        response.write('<p>Para completar la lista de juegos, introduce algún título ');
        response.write('no listado anteriormente:</p>');
        response.write('<form action="juegos" method="POST">');
        response.write('<label for="nombre">Título: </label> ');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="FE Heroes">');
        response.write('<input type="submit" value="Actualizar">');
        response.write('</form><br>');
        response.write('<a href="/">Regresar a lista de juegos actualizada.</a>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/juegos' && request.method === 'POST') {  
        const datos = [];
        request.on('data', (dato) => {
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            const nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            games.push(nuevo_dato);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write('<html lang="es-mx"><head>');
            response.write('<meta charset="UTF-8">');
            response.write('<title>Laboratorio 10</title>');
            response.write('</head><body>');
            response.write('<h1>Fire Emblem</h1>');
            response.write('<p>Fire Emblem es una franquicia de videojuegos del género rol ');
            response.write('táctico desarrollada por Intelligent Systems,diseñada por Shouzou Kaga ');
            response.write('y distribuida por Nintendo. Fire Emblem se caracteriza por la mezcla de ');
            response.write('los géneros de estrategia y rol, por ser pioneros en este tipo de juegos ');
            response.write('y por tener una gran influencia del folclore medieval europeo ');
            response.write('(<a href="https://es.wikipedia.org/wiki/Fire_Emblem">Wikipedia</a>.)</p>')
            response.write('<p>A continuación, se muestra un listado de los juegos que han salido a la ');
            response.write('venta desde la aparición de la franquicia:</p>');
            response.write('<ul style="list-style-type:square">');
            for (let i in games) {
                response.write('<li>' + games[i] + '</li>');
            }
            response.write('</ul>');
            response.write('<a href="juegos">Actualizar lista de juegos.</a>');
            response.write('<br><a href="imagenes">Visitar galería de imágenes.</a>');
            response.write('</body>');
            response.end();
        });
    } else if (request.url === '/imagenes' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="UTF-8">');
        response.write('<title>Laboratorio 10</title>');
        response.write('</head><body>');
        response.write('<h1>Galería de Fire Emblem</h1>');
        response.write('<p><img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_FireEmblemThreeHouses_image1600w.jpg"');
        response.write(' alt="FE Three Houses" height="300">&emsp;');
        response.write('<img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_FireEmblemWarriorsThreeHopes_image1600w.jpg"');
        response.write(' alt="FE Three Hopes" height="300"></p>');
        response.write('<p><img src="https://cdn.wallpapersafari.com/86/27/nW9CVt.png"');
        response.write(' alt="FE Fates" height="300">&emsp;');
        response.write('<img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_3ds_25/SI_3DS_FireEmblemAwakening_image1600w.jpg"');
        response.write(' alt="FE Awakening" height="300"></p>');
        response.write('<a href="/">Regresar a Inicio.</a>');
        response.write('</body>');
        response.end();
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<meta charset="UTF-8">');
        response.write('<title>FE | Sitio no encontrado</title>');
        response.write('</head><body>');
        response.write('<h1>Sitio no encontrado</h1>');
        response.write('Lo siento, el elemento que buscas no existe.')
        response.write('</body>');
        response.end();
    }
});

server.listen(3000);