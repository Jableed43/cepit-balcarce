import * as readlineSync from 'readline-sync';

// Definir la clave correcta
const claveCorrecta: string = "eureka";

// Definir el número máximo de intentos
const intentosMaximos: number = 3;
let accesoPermitido: boolean = false;

// Ciclo for con límite de 3 intentos
for (let intentos = 0; intentos < intentosMaximos; intentos++) {
  // Solicitar la clave al usuario
  let claveIngresada = readlineSync.question("Ingrese la clave: ");
  
  // Verificar si la clave es correcta
  if (claveIngresada === claveCorrecta) {
    console.log("¡Clave correcta! Acceso permitido.");
    accesoPermitido = true;  // Salir del bucle
    break;  // Salir del ciclo
  } else {
    console.log(`Clave incorrecta. Intentos restantes: ${intentosMaximos - (intentos + 1)}`);
  }
}

// Verificar si se agotaron los intentos
if (!accesoPermitido) {
  console.log("Ha agotado todos los intentos. Acceso denegado.");
}
