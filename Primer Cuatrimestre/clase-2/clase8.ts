//Merge sort
function merge(left: number[], right: number[]): number[] {
  //Generar un espacio donde vamos a volcar los valores
  const sortedArray: number[] = [];
  //Inicializamos nuestros indices
  let i = 0;
  let j = 0;

  //Mezclar los dos arrays
  while (i < left.length && j < right.length) {
    //Comparando los valores de los dos listados
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      console.log(i);
      i++;
    } else {
      sortedArray.push(right[j]);
      console.log(j);
      j++;
    }
  }

  let result = sortedArray.concat(left.slice(i)).concat(right.slice(j));
  console.log(result);
  //Agregar los elementos restantes
  return result;
}
function mergeSort(array: number[]): number[] {
  if (array.length <= 1) return array;

  //Dividir el array por la mitad
  const mid = Math.floor(array.length / 2);
  //Obtenemos la primera mitad del array
  const left = mergeSort(array.slice(0, mid));
  //Obtenemos la segunda mitad del array
  const right = mergeSort(array.slice(mid));
  console.log({ left, right });
  return merge(left, right);
}

// console.log(mergeSort([38, 27, 43, 55, 1, 90, 82, 9, 10, 9, 3, 44, 120]));

// Busqueda

//Busqueda tradicional, lineal, sequential
function linearSearch(array: number[], target: number): number {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === target) {
      //devuelve el indice del elemento encontrado
      return index;
    }
  }
  //Si no encuentra el elemento, retorna -1
  return -1;
}

// console.log(linearSearch([0, 5, 10, 15, 20, 25, 30, 35, 45, 55, 60, 65], 60));
// console.log(linearSearch([0, 5, 10, 15, 20, 25, 30, 35, 45, 55, 60, 65], 56));

//Busqueda binaria
function binarySearch(array: number[], target: number): number {
  //La primera posicion
  let left = 0;

  //La ultima posicion
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    //El primer lugar donde buscamos es en el medio
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1; //buscar en la mitad derecha
      console.log({ left });
    } else {
      right = mid - 1; //Buscar en la mitad izquierda
      console.log({ right });
    }
  }
  return -1;
}

// console.log("resultado ok", binarySearch([10, 20, 30, 40, 50], 30));
// console.log("resultado bad", binarySearch([10, 20, 30, 40, 50], 65));

//Recursividad

//Factorial: el producto de todos los enteros desde 1 hasta n - n!

function factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1; //Caso base - condicion de corte
  }
  let resultado = n * factorial(n - 1);
  console.log(resultado);
  return resultado;
}

// factorial(5);

//Fibonacci - retorna el proximo valor de la secuencia de fibonacci
function fibonacci(n: number): number {
  if (n === 0) return 0; //Casos base
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(8));

//Potencia de un numero
function potencia(base: number, exponente: number): number {
  //caso base
  if (exponente === 0) {
    return 1;
  }
  return base * potencia(base, exponente - 1);
}

console.log(potencia(2, 3));

//Contador hacia atras
function countDown(n: number): void {
  if (n < 0) return; //Caso base
  console.log(n);
  countDown(n - 1);
}

countDown(40);
