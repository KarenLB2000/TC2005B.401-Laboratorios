// Función 1. Promedio. (node .\laboratorio_8.js)
function ejer_1(array) {
    let summatory = 0;
    for (let element of arr) {
        summatory += element;
    }

    let avg = summatory / array.length;
    return avg;
}

let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random()*10)
}

let resultado = ejer_1(arr);
console.log('Arreglo: ' + '[' + arr.toString() + ']')
console.log('Promedio: ' + resultado);

// Función 2. Archivo de texto (módulo fs).
let texto = '"Mine has been a life of much shame. I can';
texto += "'t" + 'even guess myself what it must be to live';
texto += 'the life of a human being."\n― Osamu Dazai, No Longer Human';
const filesystem = require('fs');
filesystem.writeFileSync('laboratorio.txt', texto);

// Función 3. 
// En construcción. Problema de elección.

// Función 4. Petición al servidor. http://localhost:3000/
const http = require('http');
const fs = require('fs').promises;

const server = http.createServer( (request, response) => {
    fs.readFile(__dirname + "/laboratorio.html")
    .then(contents => {
        response.setHeader('Content-Type', 'text/html');
        response.writeHead(200);
        response.end(contents);
    })
    .catch(err => {
        response.writeHead(500);
        response.end(err);
        return;
    });
});

server.listen(3000);

// Referencias.
// By. (2020). Cómo crear un servidor web en Node.js con el módulo HTTP. Recuperado de: 
// https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module-es