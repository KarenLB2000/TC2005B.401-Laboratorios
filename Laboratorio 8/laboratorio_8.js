// Función 1. Promedio. (node .\laboratorio_8.js)
function ejer_1(arreglo) {
    let sumatoria = 0;
    for (let elemento of arreglo) {
        sumatoria += elemento;
    }

    let avg = sumatoria / arreglo.length;
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

// Función 3. Determinación del sexo.
/*La función determina_sexo(cadena) que recibe una cadena de texto y despliega el sexo de un ser 
humano. En este caso, para poder evaluar una secuencia de cromosomas, se utiliza una cadena de 
texto cuyo contenido son X's y Y's. El sexo femenino está definido por X > Y; el sexo masculino 
por X < Y; y en caso de X = Y, el sexo aún no está definido.*/

function determina_sexo(cadena) {
    let x = 0; let y = 0;
    for (let i = 0; i < cadena.length; i++){
        if (cadena[i].toLowerCase() == "x") {
            x += 1;
        }

        if (cadena[i].toLowerCase() == "y") {
            y += 1;
        }
    }

    if (x > y){
        return "Sexo: Femenino.";
    } else
    if (x < y){
        return "Sexo: Masculino.";
    } else {
        return "Sexo: Indefinido.";
    }
}

let p = ["XXXXYYXY", "XYYXYYXY", "XXYYXYXY"];
console.log("Cadena: " + p[2]);
console.log(determina_sexo(p[2]));

// Función 4. Petición al servidor. (http://localhost:3000/)
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