// https://www.w3schools.com/react/react_es6_destructuring.asp

// Operador de desestructuración

function tempMinMax() {
  return [-1, 20];
}

let temp = tempMinMax();
let tempMin = temp[0];
let tempMax = temp[1];

console.log(tempMin, tempMax); // Funciona, forma ES5

// TODO: No modifiques la función. Modificar el código solamente a partir de aquí. Usa el operador de desestructuración para asignar el valor que retorna la función tempMinMax a las variables tempDestructMin y tempDestructMax (debes crearlas)

let [tempDestructMin, tempDestructMax] = tempMinMax();
console.log(tempDestructMin, tempDestructMax); // -1 20
