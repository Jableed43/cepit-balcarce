// Realice una calculadora que sume o reste según el pedido del usuario.
// El usuario deberá ingresar 2 números por teclado
// Luego ingresará una opción:
// Si ingresa 1 los números se sumarán
// Si ingresa 2 los números se restarán
// Si ingresa cualquier otra tecla termina el programa
// Para informar el resultado de la operación debe usar el siguiente formato (40 guiones ‘-’ )

import rls from "readline-sync";

let i: number;
let linea: string;

// let numero1: number = rls.questionInt("Ingrese un numero: ");
// let numero2: number = rls.questionInt("Ingrese un numero: ");
// let opcionMenu: number = rls.questionInt(
//   "Ingrese 1 para sumar, 2 para restar, cualquier tecla para salir: "
// );

function suma(numero1: number, numero2: number) {
  console.log(numero1 + numero2);
  let resultado = numero1 + numero2;
  return { resultado, numero1, numero2 };
}

let resultado = suma(2, 5);

//Scope global
// linea = "-";
// for (i = 0; i <= 40; i++) {
//   linea = linea + "-";
// }

// if (opcionMenu == 1) {
//   Scope local
//   Mostrar resultado
//   console.log(linea);
//   console.log("el resultado es:", numero1 + numero2);
//   console.log(linea);
// } else if (opcionMenu == 2) {
//   Mostrar resultado
//   console.log(linea);
//   console.log("el resultado es:", numero1 - numero2);
//   console.log(linea);
// } else {
//   console.log(linea);
//   console.log("Haz salido del programa");
//   console.log(linea);
// }

// switch (opcionMenu) {
//   case 1:
//     console.log(linea);
//     console.log("el resultado es:", numero1 + numero2);
//     console.log(linea);
//     break;
//   case 2:
//     console.log(linea);
//     console.log("el resultado es:", numero1 - numero2);
//     console.log(linea);
//     break;
//   case 3:
//     console.log(linea);
//     console.log("el resultado es:", numero1 * numero2);
//     console.log(linea);
//     break;
//   case 4:
//     console.log(linea);
//     console.log("el resultado es:", numero1 / numero2);
//     console.log(linea);
//     break;
//   default:
//     console.log(linea);
//     console.log("Haz salido del programa");
//     console.log(linea);
//     break;
// }

// function dibujarSimbolos(
//   mensaje: string,
//   simbolo: string = "-",
//   cantidad: number = 40
// ) {
//   let linea = simbolo;
//   for (i = 0; i <= cantidad; i++) {
//     linea = linea + simbolo;
//   }
//   console.log(linea);
//   console.log(mensaje);
//   console.log(linea);
// }

// if (opcionMenu == 1) {
//   //Scope local
//   //Mostrar resultado
//   dibujarSimbolos(`el resultado es: ${numero1 + numero2}`);
// } else if (opcionMenu == 2) {
//   //Mostrar resultado
//   dibujarSimbolos(`el resultado es: ${numero1 - numero2}`, "#", 60);
// } else {
//   dibujarSimbolos("Haz salido del programa", "_");
// }

// ----------------------------------------
// El resultado de la operación es: X
// ----------------------------------------
