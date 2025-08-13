// Operador de spread

// https://www.w3schools.com/react/react_es6_spread.asp

let paciente = {
    nombre: "Pedro",
    ultimaVisitaPagada: false,
    ultimaVisita: '4/4/2022 18: 32: 19'
}

// A) COPIA el paciente usando el operador de spread a un NUEVO objeto de nombre 'pacienteCopiado'; pero añade una nueva propiedad que se llame 'localidad'; y asignale cualquier valor

let pacienteCopiado = {
    ...paciente, 
    localidad: "Barcelona"};

console.log(pacienteCopiado);
/**
 * {
    nombre: "Pedro",
    ultimaVisitaPagada: false,
    ultimaVisita: '4/4/2022 18: 32: 19',
    localidad: 'Barcelona'
}
 */

// console.log(paciente == pacienteCopiado); // false 
// IMPORTANTE^ : Los objetos deben estar en diferentes posiciones de memoria, la comparación debe dar false

let pacientes = [{
    nombre: "Pedro",
    ultimaVisitaPagada: false,
    ultimaVisita: '4/4/2022 18: 32: 19'
}, {
    nombre: "María",
    ultimaVisitaPagada: true,
    ultimaVisita: '4/4/2022 18: 32: 19'
}];

// B) COPIA el array de pacientes Y AÑADE un nuevo paciente. USa el operador de 'spread' para realizar la copia, NO HAGAS PUSH. Guarda el array nuevo en una variable de nombre 'pacientesActualizados'. 

const pacientesActualizados = [...pacientes,
    {
        nombre: "Olivia",
        ultimaVisitaPagada: false,
        ultimaVisita: '1/4/2021 18: 32: 19'
    }
];

console.log(pacientesActualizados);

/**
 * let pacientes = [{
    nombre: "Pedro",
    ultimaVisitaPagada: false,
    ultimaVisita: '4/4/2022 18: 32: 19'
}, {
    nombre: "María",
    ultimaVisitaPagada: true,
    ultimaVisita: '4/4/2022 18: 32: 19'
}, {
     nombre: "Olivia",
    ultimaVisitaPagada: false,
    ultimaVisita: '1/4/2021 18: 32: 19'
}];
 */

console.log(pacientes == pacientesActualizados); // false
