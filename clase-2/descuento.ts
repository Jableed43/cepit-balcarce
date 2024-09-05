import * as readlineSync from "readline-sync";

// Solicitamos al usuario que ingrese el precio del producto
let precioInicial: number = readlineSync.questionFloat("Ingrese el precio del producto: ");

// Solicitamos al usuario que ingrese el porcentaje de descuento en enteros
let porcentajeDescuento: number = readlineSync.questionInt("Ingrese el porcentaje de descuento (0 a 100): ");

// Convertimos el porcentaje ingresado a un valor decimal
let descuento: number = porcentajeDescuento / 100;

// Calculamos el monto del descuento
let montoDescuento: number = precioInicial * descuento;

// Calculamos el precio final restando el descuento del precio inicial
let precioFinal: number = precioInicial - montoDescuento;

// Mostramos los resultados en la consola
console.log("El precio inicial del producto es: $" + precioInicial.toFixed(2));
console.log("El porcentaje de descuento aplicado es: " + porcentajeDescuento + "%");
console.log("El monto del descuento es: $" + montoDescuento.toFixed(2));
console.log("El precio final del producto es: $" + precioFinal.toFixed(2));
