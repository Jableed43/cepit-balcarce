// Es un contrato
interface Producto {
  nombre: string;
  precio: number;
  stock: number;
}

interface TiendaPepe {
  productos: Producto[];
  crearProducto: (
    nombreProducto: string,
    precio: number,
    stock: number
  ) => void;
  actualizarPrecio: (nombre: string, precio: number) => void;
}

const tiendaPepe: TiendaPepe = {
  productos: [
    {
      nombre: "Trout Rainbow Whole",
      precio: 20.39,
      stock: 11,
    },
    {
      nombre: "Bread - Roll, Italian",
      precio: 20.61,
      stock: 38,
    },
    {
      nombre: "Bar Special K",
      precio: 86.98,
      stock: 42,
    },
    {
      nombre: "Salt - Celery",
      precio: 48.2,
      stock: 44,
    },
    {
      nombre: "Kirsch - Schloss",
      precio: 50.79,
      stock: 36,
    },
  ],
  //implementacion de las funciones, definimos comportamiento
  crearProducto(nombreProducto, precio, stock) {
    //Pasamos nombre a minusculas y le quitamos los espacios al principio y al final
    const nuevoProducto = {
      nombre: nombreProducto.toLowerCase().trim(),
      precio: precio,
      stock: stock,
    };
    if (nuevoProducto) {
      this.productos.push(nuevoProducto);
      console.log(`Producto ${nombreProducto} añadido`);
    }
  },
  actualizarPrecio(nombre, precio) {
    let productoEncontrado = this.productos.find(
      producto => producto.nombre === nombre.toLowerCase().trim()
    );
    //Si encuentra el producto entonces actualiza precio
    if (productoEncontrado) {
      let precioViejo = productoEncontrado.precio;
      productoEncontrado.precio = precio;
      console.log(
        `Producto ${nombre} el precio era ${precioViejo}, ahora es ${precio}`
      );
    } else {
      console.log(`Producto ${nombre} no encontrado`);
    }
  },
};

tiendaPepe.crearProducto("roquefort", 20000, 20);

console.log(tiendaPepe.productos);

tiendaPepe.actualizarPrecio("roquefort", 35000);

console.log(tiendaPepe.productos);
