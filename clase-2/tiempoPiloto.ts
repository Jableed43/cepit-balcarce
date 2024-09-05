import * as readlineSync from "readline-sync";

// Inicializamos variables para almacenar el tiempo total
let tiempoTotal: number = 0;

// Pedimos el tiempo de cada vuelta y lo sumamos al tiempo total
for (let i = 1; i <= 4; i++) {
  let tiempoVuelta: number = readlineSync.questionFloat(`Ingrese el tiempo de la vuelta ${i}: `);
  tiempoTotal += tiempoVuelta;
}

// Calculamos el promedio de las vueltas
let promedioVuelta: number = tiempoTotal / 4;

// Mostramos el tiempo total y el promedio
console.log("El tiempo total de las 4 vueltas es: " + tiempoTotal.toFixed(2) + " segundos.");
console.log("El promedio de tiempo por vuelta es: " + promedioVuelta.toFixed(2) + " segundos.");
