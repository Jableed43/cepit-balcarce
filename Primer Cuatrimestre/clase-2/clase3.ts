import * as rls from 'readline-sync'
//Armar una tabla de multiplicar de x numero
//El usuario ingresa numero por consola

// let numero: number = rls.questionInt("Ingrese un numero para mostrar su tabla ")

// //index - indice
// for(let i = 1; i <= 10; i++){
//     console.log(`${numero} x ${i} = ${numero * i} `)
//     console.log({i})
// }

//Calcular el Promedio de 10 Notas

let nota: number;
//Acumulador
let suma: number = 0;
let cantNotas: number;
let promedio: number;
cantNotas = rls.questionInt('Ingrese la cantidad de notas ')


for(let i = 1; i <= cantNotas; i++){
    //Pedimos la nota y le avisamos al usuario donde esta ubicado en el proceso
    nota = parseFloat(rls.question(`Ingrese la nota ${i}: `))
    suma = suma + nota
    // suma += nota
}

promedio = suma / cantNotas

console.log(`El promedio de las ${cantNotas} es: ${promedio.toFixed(2)}`)
// .toFixed(2) permite dos numeros luego de la coma en un valor decimal
// ejemplo: 8.33