import * as readlineSync from 'readline-sync';

// Variables
let numero: number;
let maximo: number | null = null;
let minimo: number | null = null;
let suma: number = 0;
let contador: number = 0;

// Leer el primer número antes del bucle
numero = parseInt(readlineSync.question("Ingrese un número (0 para terminar): "), 10);

// Ciclo para leer valores hasta que el usuario ingrese un 0
while (numero !== 0) {
  // Inicializamos maximo y minimo con el primer número ingresado
  if (maximo === null || numero > maximo) {
    maximo = numero;
  }
  if (minimo === null || numero < minimo) {
    minimo = numero;
  }
  
  // Sumar el número ingresado a la suma total
  suma += numero;
  
  // Aumentar el contador de números ingresados
  contador++;
  
  // Leer el siguiente número
  numero = parseInt(readlineSync.question("Ingrese un número (0 para terminar): "), 10);
}

// Calcular la media
let media: number = contador > 0 ? suma / contador : 0;

// Mostrar resultados
if (contador > 0) {
  console.log(`El número máximo es: ${maximo}`);
  console.log(`El número mínimo es: ${minimo}`);
  console.log(`La media de los números es: ${media.toFixed(2)}`);
} else {
  console.log("No se ingresaron valores.");
}
