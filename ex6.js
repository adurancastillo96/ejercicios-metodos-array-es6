// Usa el método .filter para realizar esta kata: https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

// Ten en cuenta que la mayoría de métodos de array disponen de un segundo parámetro en la función de callback, que indica el índice sobre la posición en la se está iterando en ese momento
/** 
Ejecuta este código en otro fichero e intenta entender que estas viendo por consola:

let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    return element;
});

*/

function removeEveryOther(arr) {
    //your code here
    return arr.filter((element, index) => index % 2 == 0)
    // return arr.filter((element, index) => index % 2) funcionaría
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']), ['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9]);
console.log(removeEveryOther([['Goodbye'], { 'Great': 'Job' }]), [['Goodbye']]);