import * as readlineSync from 'readline-sync';

// Variables
let numero: number;
let maximo: number | null = null;  // Inicializamos como null para no tener un valor predeterminado

// Ciclo para leer valores hasta que el usuario ingrese un 0
do {
  numero = parseInt(readlineSync.question("Ingrese un número (0 para terminar): "), 10);

  if (numero !== 0) {
    // Si es el primer número o el número actual es mayor que el máximo registrado
    if (maximo === null || numero > maximo) {
      maximo = numero;
    }
  }
} while (numero !== 0);

// Mostrar el máximo valor encontrado
if (maximo !== null) {
  console.log(`El número máximo ingresado es: ${maximo}`);
} else {
  console.log("No se ingresaron valores.");
}
