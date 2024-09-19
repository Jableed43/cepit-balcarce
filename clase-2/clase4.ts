import * as readlineSync from 'readline-sync';

// Realice un programa que devuelva la potencia de un número. 
// La base y el exponente deben ser ingresados por teclado. 
// Sólo deben admitirse exponentes mayores o iguales a cero. 
// Recuerde que el resultado de un numero elevado a 0 es 1.
// Separe la lógica de calcular la potencia utilizando métodos.

// Función para calcular la potencia
function calcularPotencia(base: number, exponente: number): number {
  if (exponente === 0) {
    return 1; // Cualquier número elevado a 0 es 1
  }
  
  let resultado: number = 1;
  for (let i = 1; i <= exponente; i++) {
    resultado *= base;
  }
  return resultado;
}

// Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso según si el primer número que se indique como parámetro es múltiplo del segundo 
// Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero
// Recuerde que la operación mod permite saber si el resto de una división es cero

// Solicitar la base y el exponente al usuario
let base: number = parseFloat(readlineSync.question("Ingrese la base: "));
let exponente: number = parseInt(readlineSync.question("Ingrese el exponente (mayor o igual a 0): "));

// Validar que el exponente sea mayor o igual a 0
if (exponente < 0) {
  console.log("El exponente debe ser mayor o igual a 0.");
} else {
  // Calcular y mostrar el resultado
  let potencia: number = calcularPotencia(base, exponente);
  console.log(`El resultado de ${base} elevado a ${exponente} es: ${potencia}`);
}


// Función para verificar si un número es múltiplo de otro
function esMultiplo(numero1: number, numero2: number): boolean {
    return numero1 % numero2 === 0; // Devuelve verdadero si el resto es 0, falso en caso contrario
  }
  
  // Solicitar los números al usuario
  let numero1: number = parseFloat(readlineSync.question("Ingrese el primer número: "));
  let numero2: number = parseFloat(readlineSync.question("Ingrese el segundo número: "));
  
  // Verificar si el primer número es múltiplo del segundo
  if (esMultiplo(numero1, numero2)) {
    console.log(`${numero1} es múltiplo de ${numero2}`);
  } else {
    console.log(`${numero1} no es múltiplo de ${numero2}`);
  }

//   Implemente un método llamado cantidadDeDivisores que reciba un número entero y devuelva la cantidad de divisores 
//   Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, por lo que la respuesta debería ser 5 
//   Re-utilice el método esMultiplo implementado para el ejercicio anterior
  
  // Función para contar la cantidad de divisores de un número
  function cantidadDeDivisores(numero: number): number {
    let cantidad: number = 0;
    
    // Verificar los divisores desde 1 hasta el número
    for (let i = 1; i <= numero; i++) {
      if (esMultiplo(numero, i)) {
        cantidad++;
      }
    }
    
    return cantidad;
  }
  
  // Solicitar el número al usuario
  let numero: number = parseInt(readlineSync.question("Ingrese un número entero: "));
  
  // Calcular y mostrar la cantidad de divisores
  let divisores: number = cantidadDeDivisores(numero);
  console.log(`El número ${numero} tiene ${divisores} divisores.`);

//   Implemente un método llamado imprimirNombre que reciba un nombre y un apellido y devuelva los dos datos concatenados en una variable de tipo string. 
//   El string devuelto debe imprimirse por consola.

// Función para concatenar nombre y apellido
function imprimirNombre(nombre: string, apellido: string): string {
  return `${nombre} ${apellido}`; // Concatenar nombre y apellido
}

// Solicitar el nombre y apellido al usuario
let nombre: string = readlineSync.question("Ingrese su nombre: ");
let apellido: string = readlineSync.question("Ingrese su apellido: ");

// Concatenar e imprimir el resultado
let nombreCompleto: string = imprimirNombre(nombre, apellido);
console.log(`El nombre completo es: ${nombreCompleto}`);
