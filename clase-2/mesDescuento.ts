import * as readlineSync from 'readline-sync';

// Función para determinar si hay descuento basado en el mes
function verificarDescuento(mes: string): boolean {
  // Convertir el mes a minúsculas para una comparación insensible a mayúsculas/minúsculas
  mes = mes.toLowerCase();
  
  // Comprobar si el mes es octubre usando un if dentro de la función
  if (mes === "octubre") {
    return true;
  } else {
    return false;
  }
}

// Solicitar al usuario que ingrese el precio unitario, la cantidad y el mes
let precioUnitario: number = readlineSync.questionFloat("Ingrese el precio unitario del producto: ");
let cantidad: number = readlineSync.questionInt("Ingrese la cantidad de productos: ");
let mes: string = readlineSync.question("Ingrese el mes de la compra: ");

// Determinar si hay descuento
let tieneDescuento: boolean = verificarDescuento(mes);

// Calcular el precio total de la compra
let precioTotal: number = precioUnitario * cantidad;

// Aplicar descuento si corresponde
if (tieneDescuento) {
  let descuento: number = 0.15; // 15% de descuento
  let precioConDescuento: number = precioTotal * (1 - descuento);
  console.log(`El precio total de la compra con descuento es: $${precioConDescuento.toFixed(2)}`);
} else {
  console.log(`El precio total de la compra es: $${precioTotal.toFixed(2)}`);
}
