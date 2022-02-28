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
texto += "'t" + 'even guess myself what it must be to live the life of a human being."';
texto +="\n― Osamu Dazai, No Longer Human";
const filesystem = require('fs');
filesystem.writeFileSync('laboratorio.txt', texto);

// Función 3. 
// En construcción. Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución 
// en js que se ejecute sobre node.

// Servidor. 
// En construcción. Aplicación web que al enviar una petición al servidor, devuelva una de las páginas que creaste 
// anteriormente en tus laboratorios