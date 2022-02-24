// Laboratorio 4 - Ana Karen López Baltazar (A01707750)

// Ejercicio 1 - Tabla de cuadrados y cubos.
const numero = prompt("Ingresa un número. ");

function ejer_1(n) {
    let tabla = "<table>";
    
    for (let i = 1; i <= n; i++) {
        tabla += "<tr>";
        tabla += "<td>" + i + "</td>" + "<td>" + i*i + "</td>" + "<td>" + i*i*i + "</td>";
        tabla += "</tr>";
    }
    tabla += "</table>";
    return tabla;
}

document.getElementById("ejercicio_1").innerHTML = ejer_1(numero);

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
        return "<p>Tu es resultado es incorrecto.<br> Tiempo de respuesta: " + tiempo + " ms";
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
        
        // Impresión de arreglo.
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
    contador += "N. ceros: " + cero;
    return contador;
}

document.getElementById("ejercicio_3").innerHTML = ejer_3(arreglo);

// Ejercicio 4 - Promedios.
function ejer_4() {

}

document.getElementById("ejercicio_4").innerHTML = ejer_4();

/*  
4:
Función: promedios. Parámetros: Un arreglo de arreglos de números. 
Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.

5:
Función: inverso. Parámetros: Un número. Regresa: El número con sus dígitos en orden inverso.

6:
Crea una solución para un problema de tu elección (puede ser algo relacionado con tus intereses, 
alguna problemática que hayas identificado en algún ámbito, un problema de programación que 
hayas resuelto en otro lenguaje, un problema de la ACM, entre otros). El problema debe estar descrito 
en un documento HTML, y la solución implementada en JavaScript, utilizando al menos la creación de 
un objeto, el objeto además de su constructor deben tener al menos 2 métodos. Muestra los resultados
en el documento HTML.
*/