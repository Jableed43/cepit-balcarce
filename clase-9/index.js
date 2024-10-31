import readlineSync from "readline-sync";
import {
  leer,
  guardar,
  buscarProducto,
  editarProducto,
  eliminarProducto,
} from "./utils.js";

const inventarioPath = "./inventario.json";

function agregarProducto() {
  const nombre = readlineSync.question("Ingrese el nombre del producto: ");
  const precio = parseFloat(
    readlineSync.question("Ingrese el precio del producto: ")
  );
  const cantidad = parseInt(
    readlineSync.question("Ingrese la cantidad del producto: "),
    10
  );

  const producto = { nombre, precio, cantidad };
  guardar(inventarioPath, producto);
  console.log("Producto agregado correctamente.");
}

function verInventario() {
  console.log("Inventario actual:");
  leer(inventarioPath);
}

function buscarProductoPorId() {
  const id = parseInt(
    readlineSync.question("Ingrese el ID del producto a buscar: "),
    10
  );
  buscarProducto(inventarioPath, id);
}

function editarProductoPorId() {
  const id = parseInt(
    readlineSync.question("Ingrese el ID del producto a editar: "),
    10
  );
  const nombre = readlineSync.question(
    "Ingrese el nuevo nombre del producto: "
  );
  const precio = parseFloat(
    readlineSync.question("Ingrese el nuevo precio del producto: ")
  );
  const cantidad = parseInt(
    readlineSync.question("Ingrese la nueva cantidad del producto: "),
    10
  );

  const producto = { nombre, precio, cantidad };
  editarProducto(inventarioPath, id, producto);
}

function eliminarProductoPorId() {
  const id = parseInt(
    readlineSync.question("Ingrese el ID del producto a eliminar: "),
    10
  );
  eliminarProducto(inventarioPath, id);
}

function menu() {
  console.log("\nSistema de Inventario");
  console.log("1. Ver inventario");
  console.log("2. Agregar producto");
  console.log("3. Buscar producto");
  console.log("4. Editar producto");
  console.log("5. Eliminar producto");
  console.log("6. Salir");
  const opcion = readlineSync.question("Seleccione una opción: ");

  switch (opcion) {
    case "1":
      verInventario();
      break;
    case "2":
      agregarProducto();
      break;
    case "3":
      buscarProductoPorId();
      break;
    case "4":
      editarProductoPorId();
      break;
    case "5":
      eliminarProductoPorId();
      break;
    case "6":
      console.log("Saliendo del sistema.");
      process.exit();
    default:
      console.log("Opción no válida.");
  }
}

while (true) {
  menu();
}
