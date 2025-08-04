/**
 * Utiliza el operador ternario https://javascript.info/ifelse#conditional-operator  para conseguir el mismo resultado
 */

let edad = 18;
let mensaje;

if (edad >= 18) {
    mensaje = "Puedes pasar";
}

else {
    mensaje = "No puedes pasar";
}

console.log(mensaje);
console.log('===============');

msj = edad >= 18 ? "Puedes pasar" : "No puedes pasar";
console.log(msj);