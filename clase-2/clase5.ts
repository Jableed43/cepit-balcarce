// Construya un algoritmo que tenga un arreglo de dimensión deseada por el usuario y llénelo con los nombres que el usuario desee

// Crear un arreglo de las posiciones que desee el usuario y llenarlo con nombres de personas
import * as readlineSync from "readline-sync";

// Función para crear un arreglo de nombres
function crearArregloDeNombres(): void {
  // Solicitar al usuario el tamaño del arreglo
  const dimension: number = readlineSync.questionInt(
    "Ingrese la cantidad de nombres que desea ingresar: "
  );

  // Verificar que el tamaño sea mayor que 0
  if (dimension <= 0) {
    console.log("La dimensión debe ser mayor a 0.");
    return;
  }

  // Inicializar el arreglo
  const nombres: string[] = new Array(dimension);

  // Llenar el arreglo con nombres proporcionados por el usuario
  for (let i = 0; i < dimension; i++) {
    nombres[i] = readlineSync.question(
      `Ingrese el nombre para la posición ${i + 1}: `
    );
  }

  // Mostrar el arreglo con los nombres ingresados
  console.log("\nNombres ingresados:");
  console.log(nombres);
}

// Llamar a la función
crearArregloDeNombres();

// Construya un algoritmo que tenga dos arreglos uno que almacene 2 nombres y otro que almacene 3 números ambos ingresados por el usuario.
// Al final debe imprimir los valores por consola.

// Función para crear y llenar los arreglos
function crearArreglos(): void {
  // Crear un arreglo para almacenar 2 nombres
  const nombres: string[] = new Array(2);

  // Llenar el arreglo de nombres
  for (let i = 0; i < nombres.length; i++) {
    nombres[i] = readlineSync.question(`Ingrese el nombre ${i + 1}: `);
  }

  // Crear un arreglo para almacenar 3 números
  const numeros: number[] = new Array(3);

  // Llenar el arreglo de números
  for (let i = 0; i < numeros.length; i++) {
    numeros[i] = readlineSync.questionInt(`Ingrese el número ${i + 1}: `);
  }

  // Imprimir los nombres
  console.log("\nNombres ingresados:");
  console.log(nombres);

  // Imprimir los números
  console.log("\nNúmeros ingresados:");
  console.log(numeros);
}

// Llamar a la función
crearArreglos();

// Construya un algoritmo que sume todos los elementos de un arreglo de tamaño N
// La dimensión del arreglo es ingresada por el usuario

// Función para crear el arreglo y sumar sus elementos
function sumarElementosArreglo(): void {
  // Solicitar al usuario la dimensión del arreglo
  const dimension: number = readlineSync.questionInt(
    "Ingrese la dimensión del arreglo: "
  );

  // Crear el arreglo con la dimensión indicada
  const numeros: number[] = new Array(dimension);

  // Llenar el arreglo con los números ingresados por el usuario
  for (let i = 0; i < numeros.length; i++) {
    numeros[i] = readlineSync.questionInt(
      `Ingrese el número en la posición ${i + 1}: `
    );
  }

  // Sumar todos los elementos del arreglo
  let suma: number = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  // Imprimir la suma total de los elementos
  console.log(`La suma de todos los elementos del arreglo es: ${suma}`);
}

// Llamar a la función
sumarElementosArreglo();

// Llenar un array de 10 posiciones con números aleatorios entre 0 y 99

// Para obtener números aleatorios crear una función Azar, que se base en las funciones disponibles en el paquete Math:
// -Math.random() devuelve un nro al azar entre 0 y 1.

// Función para generar un número aleatorio entre 0 y 99
function azar(): number {
  return Math.floor(Math.random() * 100); // Genera un número entre 0 y 99
}

// Función para llenar el array con números aleatorios
function llenarArrayConAzar(): void {
  const numeros: number[] = new Array(10); // Crear un array de 10 posiciones

  // Llenar el array con números aleatorios
  for (let i = 0; i < numeros.length; i++) {
    numeros[i] = azar(); // Asignar un número aleatorio generado por la función azar()
  }

  // Imprimir los números generados
  console.log("Array llenado con números aleatorios entre 0 y 99:");
  console.log(numeros);
}

// Llamar a la función
llenarArrayConAzar();

//Array de letras:

// Función para crear un arreglo de letras
function crearArrayLetras(): void {
  const letras: string[] = ["a", "b", "c", "d", "e"];

  // Imprimir el arreglo
  console.log("Arreglo de letras:");
  console.log(letras);
}

// Llamar a la función
crearArrayLetras();

//Verificar nombre en array:

// Función para verificar si un nombre está en el arreglo
function verificarNombreEnArreglo(): void {
  // Crear un array con 5 nombres
  const nombres: string[] = ["Juan", "María", "Carlos", "Ana", "Pedro"];

  // Imprimir el arreglo de nombres
  console.log("Arreglo de nombres:");
  console.log(nombres);

  // Pedir al usuario que ingrese un nombre
  const nombreIngresado: string = readlineSync.question(
    "Ingrese un nombre para verificar si está en el arreglo: "
  );

  // Verificar si el nombre ingresado está en el arreglo
  if (nombres.includes(nombreIngresado)) {
    console.log(`El nombre ${nombreIngresado} está en el arreglo.`);
  } else {
    console.log(`El nombre ${nombreIngresado} NO está en el arreglo.`);
  }
}

// Llamar a la función
verificarNombreEnArreglo();

// Numero mas grande de un arreglo:
// Variable global para almacenar el número más grande
let numeroMasGrande: number = 0;

// Función para encontrar el número más grande en el arreglo
function encontrarNumeroMasGrande(): void {
  const numeros: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];

  // Inicializamos el número más grande con el primer valor del arreglo
  numeroMasGrande = numeros[0];

  // Recorremos el arreglo y buscamos el mayor número
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMasGrande) {
      numeroMasGrande = numeros[i];
    }
  }

  // Imprimir el número más grande
  console.log(`El número más grande del arreglo es: ${numeroMasGrande}`);
}

// Llamar a la función para encontrar el número más grande
encontrarNumeroMasGrande();

//Sumar dos arreglos:
import * as readlineSync from "readline-sync";

// Función para cargar un arreglo con valores ingresados por el usuario
function cargarArreglo(nombreArreglo: string): number[] {
  const arreglo: number[] = [];
  for (let i = 0; i < 6; i++) {
    arreglo[i] = readlineSync.questionInt(
      `Ingrese el valor de ${nombreArreglo}[${i}]: `
    );
  }
  return arreglo;
}

// Función para sumar dos arreglos y devolver el resultado en un nuevo arreglo
function sumarArreglos(arreglo1: number[], arreglo2: number[]): number[] {
  const arregloResultado: number[] = [];
  for (let i = 0; i < 6; i++) {
    arregloResultado[i] = arreglo1[i] + arreglo2[i];
  }
  return arregloResultado;
}

// Cargar los dos arreglos
const arreglo1 = cargarArreglo("Arreglo 1");
const arreglo2 = cargarArreglo("Arreglo 2");

// Sumar los dos arreglos
const arregloSuma = sumarArreglos(arreglo1, arreglo2);

// Imprimir el resultado
console.log("El arreglo con la suma de los elementos es: ", arregloSuma);
