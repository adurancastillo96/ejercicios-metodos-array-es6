/** Solo modifica el cuerpo de la función. Implementa una función que dado un objeto que representa una persona, devuelva ùn objeto nuevo, con las mismas propiedades, pero además, con la propiedad 'edad' */
/** Prueba de implementar dos versiones: 1. crando un objeto de 0 con las propiedades que se piden. 2. usa el opreador de spread (...) par copiar las propiedades del objeto 'persona' y añadir la propiedad 'edad'  */
function calcularEdad(persona) {

    const currentYear = new Date().getFullYear();
    let newPerson = {};

    // Modificar a partir de aqui
    newPerson = {
        ...persona,
        edad: currentYear - persona.nacimiento
    }

    // NO modificar a partir de aquí
    return newPerson;

}

console.log(calcularEdad({
    nombre: 'Marcos',
    nacimiento: '1999'
})); // { nombre: 'Marcos', nacimiento: '1999', edad: el valor debería ser el año actual en el que estamos menos la edad de nacimiento de Marcos}

console.log(calcularEdad({
    nombre: 'Maria',
    nacimiento: '2003'
})); // { nombre: 'Maria', nacimiento: '2003', edad: el valor debería ser el año actual en el que estamos menos la edad de nacimiento de Maria}
