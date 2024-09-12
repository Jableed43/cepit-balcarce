import * as readlineSync from 'readline-sync';

// Variables
let numero: number = parseInt(readlineSync.question("Ingrese el número para generar su tabla de multiplicación: "), 10);
let limite: number = parseInt(readlineSync.question("Ingrese hasta qué número desea que se muestre la tabla: "), 10);

// Ciclo para mostrar la tabla de multiplicación
for (let i = 1; i <= limite; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
