import * as readlineSync from 'readline-sync';

// Función para determinar si la persona puede subirse al juego
function puedeSubir(altura: number): boolean {
  const alturaMinima = 1.30;
  
  if (altura >= alturaMinima) {
    return true; // Puede subirse
  } else {
    return false; // No puede subirse
  }
}

// Solicitar la altura de la persona
let alturaPersona: number = readlineSync.questionFloat("Ingresa tu altura en metros (ej. 1.75): ");

// Verificar si la persona puede subirse al juego
if (puedeSubir(alturaPersona)) {
  console.log("¡Puedes subirte a la montaña rusa!");
} else {
  console.log("Lo siento, no puedes subirte a la montaña rusa. Debes medir al menos 1.30 metros.");
}
