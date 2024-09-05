import * as readlineSync from 'readline-sync';

// Funcion para determinar el premio según la posicion
function determinarPremio(posicion: number): string {
  if (posicion === 1) {
    return "Medalla de oro";
  } else if (posicion === 2) {
    return "Medalla de plata";
  } else if (posicion === 3) {
    return "Medalla de bronce";
  } else {
    return "Certificado de participacion";
  }
}

// function determinarPremio(posicion: number): string {
//     switch (posicion) {
//       case 1:
//         return "Medalla de oro";
//       case 2:
//         return "Medalla de plata";
//       case 3:
//         return "Medalla de bronce";
//       default:
//         return "Certificado de participacion";
//     }
//   }

// Solicitar al usuario la posicion en la carrera
let posicionCarrera: number = readlineSync.questionInt("Ingrese su posicion en la carrera: ");

// Determinar el premio
let premio: string = determinarPremio(posicionCarrera);

// Mostrar el resultado
console.log("El premio correspondiente es: " + premio);
