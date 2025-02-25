// Este problema consiste en recorrer un array de números, si el número es un múltiplo de 3 tenemos que 
// remplazarlo con la palabra FIZZ, si un múltiplo de 5 con la palabra BUZZ y si es un múltiplo de 3 y 5 
// con FIZZ BUZZ.

// Ej. 1, 2, FIZZ, 4, BUZZ, FIZZ, 7, 8, FIZZ, BUZZ, 11, FIZZ, 13, 14, FIZZ BUZZ, ...

// Primero de todo tenemos que conocer el operador de resto (%), este operador nos permite calcular la 
// resta de una división.

// ej. 3 % 2 es 1 y 3 % 3 es 0.


const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let fizzBuzz = numeros.map((numero) => {
    if(numero % 3 === 0 && numero % 5 === 0)
        return "FIZZ BUZZ";
    if(numero % 3 === 0 && numero % 5 !== 0)
        return "FIZZ";
    if(numero % 3 !== 0 && numero % 5 === 0)
        return "BUZZ";
    return numero;
})

let buzzFizz = numeros.map((numero) => {
    if(numero % 3 === 0 && numero % 5 === 0)
        return "BUZZ FIZZ";
    if(numero % 3 === 0 && numero % 5 !== 0)
        return "BUZZ";
    if(numero % 3 !== 0 && numero % 5 === 0)
        return "FIZZ";
    return numero;
})

console.log("Arreglo FizzBuzz");
console.log(fizzBuzz);
console.log("Arreglo BuzzFizz")
console.log(buzzFizz);
console.log("Arreglo Original");
console.log(numeros);




