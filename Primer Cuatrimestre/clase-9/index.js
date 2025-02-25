import rls from "readline-sync";
import { leer, guardar, buscar, eliminar, editar } from "./utils.js";

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

function buscarProducto(){
  const nombre = rls.question("Seleccione el producto que quiere buscar: ");
  const producto = buscar(inventarioPath,nombre);
  if(producto){
    console.log("producto encontrado");
    return producto;
  }
  return null;
}

function eliminarProducto(){
  const nombre = rls.question("Seleccione el producto a eliminar: ");
  const producto = eliminar(inventarioPath,nombre);
  if(producto){
    console.log("Se elimino el producto: ");
    console.log(producto);
    return producto;
  }
  else
    console.log("No se pudo eliminar el producto!")

}

function editarProducto(){

  const producto = buscarProducto();

  if(producto){
    const nuevoNombre = rls.question("Nuevo nombre: ");
    const nuevoPrecio = rls.questionFloat("Nuevo Precio: ",{defaultInput:producto.precio});
    const nuevaCantidad = rls.questionInt("Nuevo Cantidad: ",{defaultInput:producto.cantidad});

    const productoEditado = {};

    if(nuevoNombre)
      productoEditado.nombre = nuevoNombre;
    if(nuevoPrecio)
      productoEditado.precio = parseFloat(nuevoPrecio);
    if(nuevaCantidad)
      productoEditado.cantidad = parseInt(nuevaCantidad);

    editar(inventarioPath,producto.nombre,productoEditado);
 

  }

}


function menu() {
  console.log("Sistema de inventario ");
  console.log("1. Ver inventario ");
  console.log("2. Agregar producto ");
  console.log("3. Buscar producto ");
  console.log("4. Eliminar Producto ");
  console.log("5. Editar Producto ");
  console.log("6. Salir ");

  const option = rls.question("Seleccione una opcion: ");

  switch (option) {
    case "1":
      verInventario();
      break;

    case "2":
      agregarProducto();
      break;
    
    case "3":
      buscarProducto();
      break;

    case "4":
      eliminarProducto();
      break;

    case "5":
      editarProducto();
      break;

    case "6":
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
