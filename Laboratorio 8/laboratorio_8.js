// Laboratorio 8 - Ana Karen López Balatzar (A01707750)

// Función 1. Promedios.
/*const arreglo = [];
let suma = 0;

for (let i = 0; i < 10; i++) {
    arreglo[i] = Math.floor(Math.random()*10)
}*/

// Pedir desde consola el arreglo.
let tamanio = prompt('Tamaño del arreglo: ')
function promedios(arreglo) {
    for (let elemento of arreglo) {
    suma += elemento;
    }

    let promedio = suma / arreglo.length;
    console.log('Arreglo: ' + '[' + arreglo.toString() + ']')
    console.log('Promedio: ' + promedio);
}

// Función 2. 
//En construcción. Función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.
let texto = 'fdjflksdjflsd';
const filesystem = require('fs');
filesystem.writeFileSync('laboratorio.txt', texto);


// Función 3. 
// En construcción. Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución 
// en js que se ejecute sobre node.

// Servidor. 
// En construcción. Aplicación web que al enviar una petición al servidor, devuelva una de las páginas que creaste 
// anteriormente en tus laboratorios