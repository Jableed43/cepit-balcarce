import * as readlineSync from 'readline-sync';

// Función para determinar si un numero es par, impar o cero
function determinarParidad(numero: number): string {
  if (numero === 0) {
    return "El numero es 0.";
  } else if (numero % 2 === 0) {
    return "El numero es par.";
  } else {
    return "El numero es impar.";
  }
}

// Solicitar al usuario que ingrese un numero
let numeroIngresado: number = readlineSync.questionInt("Ingrese un numero: ");

// Determinar la paridad del numero
let resultado: string = determinarParidad(numeroIngresado);

// Mostrar el resultado al usuario
console.log(resultado);
