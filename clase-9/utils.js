import fs from "fs";

export function check(path) {
  if (fs.existsSync(path)) {
    console.log("El archivo existe.");
    return true;
  } else {
    console.log("El archivo no existe.");
    return false;
  }
}

export function escribir(data, path) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
  console.log("Datos escritos correctamente en", path);
}

export function leer(path) {
  try {
    if (check(path)) {
      const result = JSON.parse(fs.readFileSync(path, "utf-8"));
      console.log("Datos leídos:", result);
      return result;
    } else {
      console.log("Archivo no encontrado para lectura.");
      return [];
    }
  } catch (error) {
    console.error("Error al leer el archivo:", error);
    return [];
  }
}

function obtenerNuevoId(inventario) {
  if (inventario.length === 0) return 1;
  const ultimoProducto = inventario[inventario.length - 1];
  return ultimoProducto.id + 1;
}

export function guardar(path, data) {
  const inventario = check(path) ? leer(path) : [];
  const nuevoId = obtenerNuevoId(inventario);
  const productoConId = { id: nuevoId, ...data };

  inventario.push(productoConId);
  escribir(inventario, path);
  console.log("Producto guardado con ID:", nuevoId);
}

// Buscar producto por ID
export function buscarProducto(path, id) {
  const inventario = leer(path);
  const producto = inventario.find(item => item.id === id);
  if (producto) {
    console.log("Producto encontrado:", producto);
    return producto;
  } else {
    console.log(`Producto con ID ${id} no encontrado.`);
    return null;
  }
}

// Editar producto por ID
export function editarProducto(path, id, data) {
  const inventario = leer(path);
  const index = inventario.findIndex(item => item.id === id);
  if (index !== -1) {
    inventario[index] = { id, ...data };
    escribir(inventario, path);
    console.log(`Producto con ID ${id} actualizado.`);
  } else {
    console.log(`Producto con ID ${id} no encontrado.`);
  }
}

// Eliminar producto por ID
export function eliminarProducto(path, id) {
  let inventario = leer(path);
  const nuevoInventario = inventario.filter(item => item.id !== id);
  if (inventario.length === nuevoInventario.length) {
    console.log(`Producto con ID ${id} no encontrado.`);
  } else {
    escribir(nuevoInventario, path);
    console.log(`Producto con ID ${id} eliminado.`);
  }
}
