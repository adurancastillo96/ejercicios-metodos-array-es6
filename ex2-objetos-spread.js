// https://www.w3schools.com/react/react_es6_spread.asp

const perro = {
    nombre: "Toby",
    edadCanina: 5
};

// Tu tarea:
// 1. Calcula la edad humana del perro (edadCanina * 7).
const edadHumana = perro.edadCanina * 7;
// 2. Usa el operador spread para copiar el objeto `perro`.
const perroCopia = { ...perro };
// 3. Añade un nuevo campo `edadHumana` al nuevo objeto.
perroCopia.edadHumana = edadHumana;
// 4. Guarda el resultado en una constante llamada `perroConEdadHumana` y muéstralo por consola
const perroConEdadHumana = perroCopia;
console.log(perroConEdadHumana);

// Esperado:
// {
//   nombre: "Toby",
//   edadCanina: 5,
//   edadHumana: 35
// }


