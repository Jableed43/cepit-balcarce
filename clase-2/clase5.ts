// Construya un algoritmo que tenga dos arreglos uno que almacene 2 nombres y otro que almacene 3 números ambos ingresados por el usuario.
// Al final debe imprimir los valores por consola.
import rls from "readline-sync";

function crearArreglos(): void {
  const nombres: string[] = new Array(2);

  for (let i = 0; i < nombres.length; i++) {
    nombres[i] = rls.question(`Ingrese el nombre ${i + 1}: `);
    console.clear();
  }

  const numeros: number[] = new Array(3);

  for (let i = 0; i < numeros.length; i++) {
    numeros[i] = rls.questionInt(`Ingrese el numero ${i + 1}: `);
    console.clear();
  }

  console.log("Nombres ingresados ");
  console.log(nombres);

  console.log("Numeros ingresados ");
  console.log(numeros);
}

// Construya un algoritmo que sume todos los elementos de un arreglo de tamaño N
// La dimensión del arreglo es ingresada por el usuario

function sumarNumeros() {
  const dimension: number = rls.questionInt("Ingresa la dimension del arreglo");

  const numeros: number[] = new Array(dimension);
  let suma: number = 0;

  for (let index = 0; index < numeros.length; index++) {
    numeros[index] = rls.questionInt(
      `Ingrese el numero ${index + 1}/${numeros.length}: `
    );
    suma = suma + numeros[index];
    // suma += numeros[index];
  }

  console.log(`La suma de todos los elementos del arreglo es: ${suma}`);
}

// Llenar un array de 10 posiciones con números aleatorios entre 0 y 99
// Para obtener números aleatorios crear una función Azar, que se base en las funciones disponibles en el paquete Math:
// -Math.random() devuelve un nro al azar entre 0 y 1.

function azar(): number {
  return Math.floor(Math.random() * 100);
}

function llenarArrayAzar(): void {
  const numeros: number[] = new Array(10);

  for (let i = 0; i < numeros.length; i++) {
    numeros[i] = azar();
  }

  console.log("El array ha sido llenado con numeros aleatorios entre 0 y 99");
  console.log(numeros);
}

llenarArrayAzar();
