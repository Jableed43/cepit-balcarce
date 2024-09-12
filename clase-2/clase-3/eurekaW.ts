import * as readlineSync from 'readline-sync';

// Definir la clave correcta
const claveCorrecta: string = "eureka";

// Definir el número máximo de intentos
const intentosMaximos: number = 3;
let intentos: number = 0;
let claveIngresada: string;
let accesoPermitido: boolean = false;

// Ciclo para dar tres oportunidades al usuario
while (intentos < intentosMaximos && !accesoPermitido) {
  // Solicitar la clave al usuario
  claveIngresada = readlineSync.question("Ingrese la clave: ");
  
  // Verificar si la clave es correcta
  if (claveIngresada === claveCorrecta) {
    console.log("¡Clave correcta! Acceso permitido.");
    accesoPermitido = true;  // Salir del bucle
  } else {
    intentos++;
    console.log(`Clave incorrecta. Intentos restantes: ${intentosMaximos - intentos}`);
  }
}

// Verificar si se agotaron los intentos
if (!accesoPermitido) {
  console.log("Ha agotado todos los intentos. Acceso denegado.");
}
