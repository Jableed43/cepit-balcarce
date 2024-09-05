import * as readlineSync from "readline-sync";

// Preguntamos al usuario cuántas vueltas quiere ingresar
let numeroVueltas: number = readlineSync.questionInt("¿Cuántas vueltas desea ingresar (entre 1 y 10)? ");

// Validamos que el número de vueltas esté en el rango permitido
if (numeroVueltas < 1 || numeroVueltas > 10) {
  console.log("Error: Debe ingresar un número entre 1 y 10.");
} else {
  let tiempoTotal: number = 0;

  // Pedimos el tiempo de cada vuelta
  for (let i = 1; i <= numeroVueltas; i++) {
    let tiempoVuelta: number = readlineSync.questionFloat(`Ingrese el tiempo de la vuelta ${i}: `);
    tiempoTotal += tiempoVuelta;
  }

  // Calculamos el promedio de tiempo por vuelta
  let promedioVuelta: number = tiempoTotal / numeroVueltas;

  // Mostramos el tiempo total y el promedio
  console.log("El tiempo total es: " + tiempoTotal.toFixed(2) + " segundos.");
  console.log("El promedio de tiempo por vuelta es: " + promedioVuelta.toFixed(2) + " segundos.");
}
