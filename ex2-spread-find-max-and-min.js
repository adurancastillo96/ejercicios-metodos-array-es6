/**
 * Con este código podemos obtener el valor máximo de un array gracias al método Math.max
 * y el operador de spread
 */

let numbers = [3, 7, 2, 8, 5];
let max = Math.max(...numbers);

console.log(max); // Outputs: 8

/** Escribe ahora el código necesario para buscar el valor mínimo del array numbers usando Math.min y el operador de spread https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min  */

let min = Math.min(...numbers);

console.log(min); // Outputs: 2