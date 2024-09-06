import * as readlineSync from 'readline-sync';

// Queremos saber si el numero ingresado es mayor a 20 o no

let num: number = readlineSync.questionInt("Escriba el numero que desea verificar si es mayor o no a 20: ")

if( typeof num === 'number' ){
    if(num > 20){
        console.log("El numero es mayor a 20 " + num);
    } else {
        console.log("El numero es menor o igual a 20 " + num)
    }
}

