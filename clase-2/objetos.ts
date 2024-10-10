interface Producto {
  nombre: string;
  precio: number;
  stock: number;
}

interface Tienda {
  productos: Producto[];
  actualizarPrecio: (nombreProducto: string, nuevoPrecio: number) => void;
  venderProducto: (nombreProducto: string, cantidadVendida: number) => void;
  productosEnOferta: (precioMax: number) => void;
  mostrarInventario: () => void;
  valorTotalInventario: () => void;
}

const tienda: Tienda = {
  productos: [
    { nombre: "Laptop", precio: 1000, stock: 10 },
    { nombre: "Mouse", precio: 20, stock: 50 },
    { nombre: "Teclado", precio: 30, stock: 40 },
    { nombre: "Monitor", precio: 200, stock: 15 },
  ],

  // Método para actualizar precio de un producto
  actualizarPrecio(nombreProducto, nuevoPrecio) {
    const producto = this.productos.find(p => p.nombre === nombreProducto);
    if (producto) {
      producto.precio = nuevoPrecio;
      console.log(`${producto.nombre} nuevo precio: $${producto.precio}`);
    } else {
      console.log(`Producto ${nombreProducto} no encontrado`);
    }
  },

  // Método para vender un producto
  venderProducto(nombreProducto, cantidadVendida) {
    const producto = this.productos.find(p => p.nombre === nombreProducto);
    if (producto && producto.stock >= cantidadVendida) {
      producto.stock -= cantidadVendida;
      console.log(
        `Vendidas ${cantidadVendida} unidades de ${producto.nombre}. Stock restante: ${producto.stock}`
      );
    } else {
      console.log(`Producto no disponible o stock insuficiente`);
    }
  },

  // Método para mostrar productos en oferta por debajo de un precio dado
  productosEnOferta(precioMax) {
    const productosEnOferta = this.productos.filter(p => p.precio <= precioMax);
    if (productosEnOferta.length > 0) {
      console.log(`Productos en oferta por debajo de $${precioMax}:`);
      productosEnOferta.forEach(p => console.log(p.nombre));
    } else {
      console.log("No hay productos en oferta");
    }
  },

  // Mostrar inventario con nombres y cantidades usando Object.keys()
  mostrarInventario() {
    console.log("Inventario de la tienda:");
    Object.keys(this.productos).forEach(key => {
      console.log(
        `${this.productos[Number(key)].nombre}: ${
          this.productos[Number(key)].stock
        } unidades`
      );
    });
  },

  // Calcular el valor total del inventario con Object.values() y reduce()
  valorTotalInventario() {
    const valorTotal = Object.values(this.productos).reduce(
      (total: number, producto: any) =>
        total + producto.precio * producto.stock,
      0
    );
    console.log(`Valor total del inventario: $${valorTotal}`);
  },
};

// Uso de los métodos
tienda.actualizarPrecio("Laptop", 950);
tienda.venderProducto("Mouse", 5);
tienda.productosEnOferta(100);
tienda.mostrarInventario();
tienda.valorTotalInventario();
