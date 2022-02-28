// Ejercicio 1 - Tabla de cuadrados y cubos.
const numero1 = prompt("Ingresa un número. ");

function ejer_1(n) {
    let tabla = "<table>";
    tabla +="<tr><th>Número</th>" + "<td>Cuadrado</td>" + "<td>Cubo</td></tr>";
    
    for (let i = 1; i <= n; i++) {
        tabla += "<tr>";
        tabla += "<td>" + i + "</td>" + "<td>" + i*i + "</td>" + "<td>" + i*i*i + "</td>";
        tabla += "</tr>";
    }
    tabla += "</table>";
    return tabla;
}

document.getElementById("ejercicio_1").innerHTML = ejer_1(numero1);

// Ejercicio 2 - Suma de números aleatorios.
var a1 = Math.floor(Math.random() * 10);
var a2 = Math.floor(Math.random() * 10);

var inicio = Date.now();
const respuesta = prompt("¿Cuál es el resultado de " + a1 + " + " + a2 + "?");
var fin = Date.now();

function ejer_2(ans) {
    let resultado = a1 + a2;
    let tiempo = fin - inicio;

    if (resultado == ans) {
        return "<p>Tu resultado es correcto.<br> Tiempo de respuesta: " + tiempo + " ms";
     } else {
        return "<p>Tu resultado es incorrecto.<br> Tiempo de respuesta: " + tiempo + " ms";
     }
}

document.getElementById("ejercicio_2").innerHTML = ejer_2(respuesta);

// Ejercicio 3 - Contador.
const arreglo = [];

for (let i = 0; i <= 9; i++) {
    arreglo[i] = Math.floor(Math.random() * 41) - 20;
}

function ejer_3(arr) {
    let imprimir = "[";
    let positivo = 0;
    let negativo = 0;
    let cero = 0;

    for (let j = 0; j <= (arr.length - 1); j++) {
        // Contador de positivos, negativos y ceros.
        if (arr[j] == 0) {
            cero++;
        } 
        else if (arr[j] > 0) {
            positivo++;
        } 
        else {
            negativo++;
        }
        
        // Impresión (string) de arreglo.
        if (j != (arr.length - 1)) {
            imprimir += arr[j] + ", ";
        }
        else {
            imprimir += arr[j];
        }
    }
    
    let contador = imprimir + "]" + "<br>";
    contador += "N. positivos: " + positivo + "<br>";
    contador += "N. negativos: " + negativo + "<br>";
    contador += "Ceros: " + cero;
    return contador;
}

document.getElementById("ejercicio_3").innerHTML = ejer_3(arreglo);

// Ejercicio 4 - Promedios.
var matriz = [];

for (let i = 0; i < 5; i++) {
    let renglon = [];
    for (let j = 0; j < 5; j++) {
        renglon[j] = Math.floor(Math.random()*10);
    }
    matriz.push(renglon);
}

console.table(matriz);

function ejer_4(matrix) {
    let promedios = [];
    for (let i = 0; i < matrix.length; i++) {
        let suma = 0;
        let promedio = 0;

        for (let j = 0; j < matrix[i].length; j++) {
            suma += matrix[i][j];
        }
        promedio = suma / matrix[i].length;
        promedios.push(promedio);
    }
    return "Promedios de matriz en consola: [" + promedios.toString() + "]";    
}

document.getElementById("ejercicio_4").innerHTML = ejer_4(matriz);

// Ejercicio 5 - Inverso.
let numero2 = Math.floor(Math.random() * 1001)+1000;

function ejer_5(num) {
    let inverso = num.toString().split('').reverse().join('');
    let regreso = "Original: " + num + "<br>";
    regreso += "Inverso: " + inverso;
    return regreso;
}

document.getElementById("ejercicio_5").innerHTML = ejer_5(numero2);

// Ejercicio 6 - Problema de mi elección.
// En construcción.