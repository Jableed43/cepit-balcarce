import * as readlineSync from 'readline-sync';

// Función para calcular la nota final
function calcularNotaFinal(practica: number, problemas: number, teorica: number): number {
  return (practica * 0.10) + (problemas * 0.50) + (teorica * 0.40);
}

let nombre: string;

do {
  // Leer el nombre del alumno
  nombre = readlineSync.question("Ingrese el nombre del alumno (deje vacío para terminar): ");

  // Verificar si el nombre es vacío para salir del bucle
  if (nombre === "") {
    break;
  }

  // Leer las notas del alumno
  let notaPractica: number = parseFloat(readlineSync.question("Ingrese la nota de la parte práctica (0-10): "));
  let notaProblemas: number = parseFloat(readlineSync.question("Ingrese la nota de la parte de problemas (0-10): "));
  let notaTeorica: number = parseFloat(readlineSync.question("Ingrese la nota de la parte teórica (0-10): "));

  // Verificar que las notas estén en el rango válido
  if (notaPractica < 0 || notaPractica > 10 || notaProblemas < 0 || notaProblemas > 10 || notaTeorica < 0 || notaTeorica > 10) {
    console.log("Error: Las notas deben estar entre 0 y 10. Intente nuevamente.");
    continue;  // Volver al inicio del bucle si hay un error
  }

  // Calcular y mostrar la nota final
  let notaFinal: number = calcularNotaFinal(notaPractica, notaProblemas, notaTeorica);
  console.log(`La nota final de ${nombre} es: ${notaFinal.toFixed(2)}`);

} while (nombre !== "");
