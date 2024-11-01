import fs from "fs";
//file system

//Valida y Chequea la existencia del archivo
export function check(path) {
  if (fs.existsSync(path)) {
    console.log("El archivo existe");
    return true;
  } else {
    console.log("El archivo no existe");
    return false;
  }
}

//funcion que nos permite leer nuestro archivo
export function leer(path) {
  if (check(path)) {
    //Accedemos con FS. a la ubicacion del archivo
    const result = JSON.parse(fs.readFileSync(path, "utf-8"));
    console.log("Datos Leidos", result);
    return result;
  } else {
    console.log("Archivo no encontrado");
    return [];
  }
}

//Que voy a escribir?
//Donde lo voy a escribir?
export function escribir(data, path) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
  console.log("Datos escritos correctamente en", path);
}

//Armar la funcionalidad para generar y guardar registros

//Generar nuestros ID's
export function obtenerNuevoId(inventario) {
  //Validar
  if (inventario.length === 0) {
    return 1;
  }
  //Busco el ultimo producto del inventario
  //Dentro de [] puede ir un numero o una operacion que retorne un valor numerico
  const ultimoProducto = inventario[inventario.length - 1];
  //El nuevo valor de id, considerando el ultimo
  return ultimoProducto.id + 1;
}

//Donde lo voy a guardar?
//Que voy a guardar?
export function guardar(path, data) {
  //Primero chequeamos el inventario
  const inventario = check(path) ? leer(path) : [];

  //   if(check(path)) {
  //     leer(path)
  //   } else {
  //     return []
  //   }

  //Crear el id, ya que es el primer dato de nuestro registro
  const nuevoId = obtenerNuevoId(inventario);

  //Armar nuestro dato
  //Usamos spread operator
  const productoConId = {
    id: nuevoId,
    ...data,
  };

  //Incluyo en mi inventario el producto nuevo
  inventario.push(productoConId);

  //Nos falta escribir en nuestro JSON
  escribir(inventario, path);
  console.log("Producto guardado con ID", nuevoId);
}
