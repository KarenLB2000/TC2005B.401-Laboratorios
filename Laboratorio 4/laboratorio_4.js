// Laboratorio 4 - Ana Karen López Baltazar (A01707750)

// Ejercicio 1.
let numero = prompt("Ingresa un número. ");
document.getElementById("ejercicio_1").innerHTML = ejer_1(numero);

function ejer_1(n) {
    let tabla = "<table>";
    for (let i = 1; i <= n; i++) {
        tabla = tabla + "<tr> <td>" + i + "</td>";
        tabla = tabla + "<td>" + i*i + "</td>";
        tabla = tabla + "<td>" + i^3 + "</td> </tr>";
    }
    tabla = tabla + "</table>";

    document.open();
    document.write(tabla);
    document.close();
}

// Ejercicio 2.
// Generación de números aleatorios.
let aleatorio1 = math.random();
let resultado = prompt("¿Cuál es el resultado de la suma?" + aleaotrio1);


/*  
1:
Entrada: un número pedido con un prompt. 
Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. 
Utiliza document.write para producir la salida

2:
Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. 
Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.

3:
Función: contador. Parámetros: Un arreglo de números. 
Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.

*/