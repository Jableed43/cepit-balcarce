import * as readlineSync from 'readline-sync';

// Variables
let numero: number;
let contadorPositivos: number = 0;
let contadorTotal: number = 0;

// Ciclo para leer valores hasta que el usuario ingrese un 0
do {
  numero = parseInt(readlineSync.question("Ingrese un número (0 para terminar): "), 10);

  if (numero !== 0) {
    contadorTotal++;  // Aumenta el contador total
    if (numero > 0) {
      contadorPositivos++;  // Aumenta el contador de positivos
    }
  }
} while (numero !== 0);

// Calcular el porcentaje de positivos
let porcentajePositivos: number = (contadorPositivos / contadorTotal) * 100;

// Mostrar los resultados
console.log(`Cantidad de valores mayores a 0: ${contadorPositivos}`);
console.log(`Porcentaje de positivos respecto del total: ${porcentajePositivos.toFixed(2)}%`);
