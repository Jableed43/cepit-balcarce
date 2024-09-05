import * as readlineSync from 'readline-sync';

// Función para calcular el total de la compra con o sin descuento
function calcularPrecioFinal(precioProducto: number, cantidad: number): number {
  let total = precioProducto * cantidad;
  
  // Si el total es mayor a 1000, se aplica el 10% de descuento
  if (total > 1000) {
    console.log("Se aplicará un descuento del 10%.");
    total = total - (total * 0.1);
  }

  return total;
}

// Solicitar el precio del producto
let precioProducto: number = readlineSync.questionFloat("Ingresa el precio del producto: $");

// Solicitar la cantidad de productos
let cantidad: number = readlineSync.questionInt("Ingresa la cantidad de productos: ");

// Calcular el precio final
let precioFinal = calcularPrecioFinal(precioProducto, cantidad);

// Mostrar el resultado
console.log(`El precio final de la compra es: $${precioFinal.toFixed(2)}`);
