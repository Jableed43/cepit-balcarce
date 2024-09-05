import * as readlineSync from 'readline-sync';

// Usuario y contrasenia registrados en el sistema
const usuarioRegistrado: string = "Juan";
const contraseniaRegistrada: string = "claveJuan";

// Función para verificar el login
function verificarLogin(usuario: string, contrasenia: string): boolean {
  // Comparar con los datos registrados
  if (usuario === usuarioRegistrado && contrasenia === contraseniaRegistrada) {
    return true;
  } else {
    return false;
  }
}

// Solicitar nombre de usuario
let usuarioIngresado: string = readlineSync.question("Ingrese su nombre de usuario: ");
// Solicitar contrasenia
let contraseniaIngresada: string = readlineSync.question("Ingrese su contrasenia: ");

// Validar login
if (verificarLogin(usuarioIngresado, contraseniaIngresada)) {
  console.log("¡Login exitoso! Bienvenido al sistema.");
} else {
  console.log("Error: Usuario o contrasenia incorrectos.");
}
