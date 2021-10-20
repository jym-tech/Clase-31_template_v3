/*Formas de almacenar datos en la computadora
Ejemplos de diferentes tipos de datos en JavaScript*/

//cadena
var cadena = "esto es una cadena de caracteres";
console.log(cadena);

//numero
var num = 100;
console.log(num);

//booleano
var bool = true;
console.log(bool);

//indefinido
var object;
console.log(object);

//reasignar el valor de una variable
//nulo
object = null;
console.log(object);

//ejemplo de matrices o arrays
//matriz con el mismo tipo de datos
var arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

//matriz con diferentes tipos de datos
var arr2 = ["hola", true, 100];
console.log(arr2);

//matriz que almacena matrices
var arr3 = [[1, 2], [2, 3], [3, 4]];

//imprimir en la consola el arreglo
console.log(arr3);

//imprimir el primer valor
console.log(arr3[0]);

//imprimir el primer valor del primer elemento de la matriz
console.log(arr3[0][0]);

//imprimir el segundo valor del primer elemento de la matriz
console.log(arr3[0][1]);

//agregar un elemento a la matriz
arr3.push("matriz 3");
console.log(arr3);

//recuperar los valores de una matriz
arr3.pop();
console.log(arr3);