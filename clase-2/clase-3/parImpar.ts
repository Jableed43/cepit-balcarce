import * as readlineSync from 'readline-sync';

// Variables
let numero: number;

// Ciclo para asegurarse que el número sea mayor que 0
do {
  numero = parseInt(readlineSync.question("Ingrese un número mayor que cero: "), 10);
  
  if (numero === 0) {
    console.log("El número no puede ser cero, intente nuevamente.");
  }
} while (numero === 0);

// Verificar si el número es par o impar
if (numero % 2 === 0) {
  console.log(`El número ${numero} es par.`);
} else {
  console.log(`El número ${numero} es impar.`);
}
