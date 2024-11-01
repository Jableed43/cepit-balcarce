import rls from "readline-sync";
import { leer, guardar } from "./utils.js";

//Ruta de ubicacion del JSON - path
const inventarioPath = "./DATA/inventario.json";

function verInventario() {
  console.log("Inventario actual: ");
  leer(inventarioPath);
}

function agregarProducto() {
  //Entrada de datos
  const nombre = rls.question("Ingrese el nombre del producto ");
  const precio = rls.questionFloat("Ingrese el precio del producto ");
  const cantidad = rls.questionInt("Ingrese la cantidad del producto ");

  //Armamos nuestro dato con la entrada
  const producto = { nombre, precio, cantidad };

  //Guardamos dato
  guardar(inventarioPath, producto);
}

function menu() {
  console.log("Sistema de inventario ");
  console.log("1. Ver inventario ");
  console.log("2. Agregar producto ");
  console.log("3. Salir ");

  const option = rls.question("Seleccione una opcion: ");

  switch (option) {
    case "1":
      verInventario();
      break;

    case "2":
      agregarProducto();
      break;

    case "3":
      console.log("Saliendo del sistema");
      process.exit();

    default:
      console.log("Opcion no valida");
      break;
  }
}

while (true) {
  menu();
}
