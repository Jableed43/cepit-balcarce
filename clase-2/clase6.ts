// Una tienda de productos electrónicos necesita un sistema para registrar su inventario. El usuario ingresará los nombres de productos y sus respectivas cantidades en stock. Luego, podrá buscar un producto por su nombre y obtener su cantidad disponible. Si el producto no existe, el sistema debe indicarlo. Además, debe permitir actualizar la cantidad en stock de un producto existente.

import * as readlineSync from "readline-sync";

interface Producto {
  nombre: string;
  cantidad: number;
}

let inventario: Producto[] = [];

// Función para agregar productos al inventario
function agregarProducto(nombre: string, cantidad: number): void {
  let productoExistente: Producto | undefined = undefined;

  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].nombre === nombre) {
      productoExistente = inventario[i];
      break;
    }
  }

  if (productoExistente) {
    productoExistente.cantidad += cantidad; // Actualiza la cantidad si ya existe
  } else {
    inventario.push({ nombre, cantidad });
  }
}

// Función para buscar producto en el inventario
function buscarProducto(nombre: string): Producto | undefined {
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].nombre === nombre) {
      return inventario[i];
    }
  }
  return undefined;
}

// Función para mostrar inventario
function mostrarInventario(): void {
  console.log("\nInventario actual:");
  for (let i = 0; i < inventario.length; i++) {
    console.log(`${inventario[i].nombre}: ${inventario[i].cantidad} unidades`);
  }
}

// Programa principal
while (true) {
  console.log(
    "\n1. Agregar producto\n2. Buscar producto\n3. Actualizar stock\n4. Mostrar inventario\n5. Salir"
  );
  const opcion = readlineSync.questionInt("Seleccione una opción: ");

  switch (opcion) {
    case 1:
      const nombreAgregar = readlineSync.question(
        "Ingrese el nombre del producto: "
      );
      const cantidadAgregar = readlineSync.questionInt(
        "Ingrese la cantidad en stock: "
      );
      agregarProducto(nombreAgregar, cantidadAgregar);
      console.log(
        `Producto agregado/actualizado: ${nombreAgregar}, ${cantidadAgregar} unidades.`
      );
      break;

    case 2:
      const nombreBuscar = readlineSync.question(
        "Ingrese el nombre del producto a buscar: "
      );
      const producto = buscarProducto(nombreBuscar);
      if (producto) {
        console.log(
          `Producto: ${producto.nombre}, Stock disponible: ${producto.cantidad} unidades.`
        );
      } else {
        console.log("El producto no existe en el inventario.");
      }
      break;

    case 3:
      const nombreActualizar = readlineSync.question(
        "Ingrese el nombre del producto a actualizar: "
      );
      const cantidadActualizar = readlineSync.questionInt(
        "Ingrese la cantidad para agregar al stock: "
      );
      agregarProducto(nombreActualizar, cantidadActualizar);
      console.log(`Stock actualizado para ${nombreActualizar}.`);
      break;

    case 4:
      mostrarInventario();
      break;

    case 5:
      console.log("Saliendo del programa...");
      process.exit(0);

    default:
      console.log("Opción inválida.");
      break;
  }
}

// Desarrolla un programa que gestione las reservas de mesas en un restaurante. El restaurante cuenta con un número limitado de mesas, y el usuario podrá hacer las siguientes acciones:

// Hacer una reserva para una mesa (se ingresará el nombre del cliente y cuántas personas ocuparán la mesa).
// Cancelar una reserva.
// Mostrar las mesas reservadas y disponibles.
// Cada mesa tiene una capacidad fija de personas, y el sistema debe verificar si hay mesas suficientes disponibles antes de confirmar una reserva.

import * as readlineSync from "readline-sync";

interface Mesa {
  numero: number;
  capacidad: number;
  reservadoPor?: string;
}

let mesas: Mesa[] = [
  { numero: 1, capacidad: 4 },
  { numero: 2, capacidad: 4 },
  { numero: 3, capacidad: 2 },
  { numero: 4, capacidad: 6 },
];

// Función para reservar una mesa
function reservarMesa(nombre: string, personas: number): void {
  let mesaDisponible: Mesa | undefined = undefined;

  for (let i = 0; i < mesas.length; i++) {
    if (!mesas[i].reservadoPor && mesas[i].capacidad >= personas) {
      mesaDisponible = mesas[i];
      break;
    }
  }

  if (mesaDisponible) {
    mesaDisponible.reservadoPor = nombre;
    console.log(`Mesa ${mesaDisponible.numero} reservada para ${nombre}.`);
  } else {
    console.log(
      "No hay mesas disponibles para la cantidad de personas solicitada."
    );
  }
}

// Función para cancelar una reserva
function cancelarReserva(nombre: string): void {
  let mesaReservada: Mesa | undefined = undefined;

  for (let i = 0; i < mesas.length; i++) {
    if (mesas[i].reservadoPor === nombre) {
      mesaReservada = mesas[i];
      break;
    }
  }

  if (mesaReservada) {
    mesaReservada.reservadoPor = undefined;
    console.log(`Reserva cancelada para ${nombre}.`);
  } else {
    console.log("No se encontró ninguna reserva a nombre de ese cliente.");
  }
}

// Función para mostrar el estado de las mesas
function mostrarMesas(): void {
  console.log("\nEstado de las mesas:");
  for (let i = 0; i < mesas.length; i++) {
    const estado = mesas[i].reservadoPor
      ? `Reservada por ${mesas[i].reservadoPor}`
      : "Disponible";
    console.log(
      `Mesa ${mesas[i].numero} (Capacidad: ${mesas[i].capacidad} personas) - ${estado}`
    );
  }
}

// Programa principal
while (true) {
  console.log(
    "\n1. Reservar mesa\n2. Cancelar reserva\n3. Mostrar mesas\n4. Salir"
  );
  const opcion = readlineSync.questionInt("Seleccione una opción: ");

  switch (opcion) {
    case 1:
      const nombreReserva = readlineSync.question(
        "Ingrese el nombre para la reserva: "
      );
      const personas = readlineSync.questionInt(
        "Ingrese la cantidad de personas: "
      );
      reservarMesa(nombreReserva, personas);
      break;

    case 2:
      const nombreCancelar = readlineSync.question(
        "Ingrese el nombre de la reserva a cancelar: "
      );
      cancelarReserva(nombreCancelar);
      break;

    case 3:
      mostrarMesas();
      break;

    case 4:
      console.log("Saliendo del programa...");
      process.exit(0);

    default:
      console.log("Opción inválida.");
      break;
  }
}

// Desarrolla un sistema para gestionar pedidos de comida en un restaurante. El usuario puede realizar las siguientes acciones:

// Agregar un pedido (nombre del cliente y los platos que quiere pedir).
// Cancelar un pedido ingresando el nombre del cliente.
// Mostrar todos los pedidos pendientes.
// El programa debe permitir gestionar múltiples pedidos y mostrar el estado de los pedidos en cualquier momento.

interface Pedido {
  cliente: string;
  platos: string[];
}

let pedidos: Pedido[] = [];

// Función para agregar un pedido
function agregarPedido(cliente: string, platos: string[]): void {
  pedidos.push({ cliente, platos });
  console.log(`Pedido agregado para ${cliente}.`);
}

// Función para cancelar un pedido
function cancelarPedido(cliente: string): void {
  let pedidoCancelado: boolean = false;

  for (let i = 0; i < pedidos.length; i++) {
    if (pedidos[i].cliente === cliente) {
      pedidos.splice(i, 1); // Eliminar el pedido del arreglo
      pedidoCancelado = true;
      break;
    }
  }

  if (pedidoCancelado) {
    console.log(`Pedido de ${cliente} ha sido cancelado.`);
  } else {
    console.log("No se encontró un pedido a nombre de ese cliente.");
  }
}

// Función para mostrar todos los pedidos pendientes
function mostrarPedidos(): void {
  console.log("\nPedidos pendientes:");
  if (pedidos.length === 0) {
    console.log("No hay pedidos pendientes.");
    return;
  }

  for (let i = 0; i < pedidos.length; i++) {
    console.log(
      `Cliente: ${pedidos[i].cliente}, Platos: ${pedidos[i].platos.join(", ")}`
    );
  }
}

// Programa principal
while (true) {
  console.log(
    "\n1. Agregar pedido\n2. Cancelar pedido\n3. Mostrar pedidos\n4. Salir"
  );
  const opcion = readlineSync.questionInt("Seleccione una opción: ");

  switch (opcion) {
    case 1:
      const cliente = readlineSync.question("Ingrese el nombre del cliente: ");
      const platosInput = readlineSync.question(
        "Ingrese los platos separados por comas: "
      );
      const platos = platosInput.split(",").map(plato => plato.trim());
      agregarPedido(cliente, platos);
      break;

    case 2:
      const clienteCancelar = readlineSync.question(
        "Ingrese el nombre del cliente cuyo pedido desea cancelar: "
      );
      cancelarPedido(clienteCancelar);
      break;

    case 3:
      mostrarPedidos();
      break;

    case 4:
      console.log("Saliendo del programa...");
      process.exit(0);

    default:
      console.log("Opción inválida.");
      break;
  }
}

// Un consultorio médico necesita gestionar las citas de sus pacientes. El sistema debe permitir las siguientes acciones:

// Registrar una cita médica (nombre del paciente y fecha).
// Cancelar una cita médica ingresando el nombre del paciente.
// Mostrar las citas registradas.
// Salir del sistema.
// El sistema debe verificar si ya existe una cita para un paciente antes de agregar una nueva.

interface CitaMedica {
  paciente: string;
  fecha: string;
}

let citas: CitaMedica[] = [];

// Función para registrar una cita médica
function registrarCita(paciente: string, fecha: string): void {
  let citaExistente: boolean = false;

  for (let i = 0; i < citas.length; i++) {
    if (citas[i].paciente === paciente) {
      citaExistente = true;
      break;
    }
  }

  if (citaExistente) {
    console.log("Ya existe una cita registrada para este paciente.");
  } else {
    citas.push({ paciente, fecha });
    console.log(`Cita registrada para ${paciente} el ${fecha}.`);
  }
}

// Función para cancelar una cita médica
function cancelarCita(paciente: string): void {
  let citaCancelada: boolean = false;

  for (let i = 0; i < citas.length; i++) {
    if (citas[i].paciente === paciente) {
      citas.splice(i, 1); // Eliminar la cita del arreglo
      citaCancelada = true;
      break;
    }
  }

  if (citaCancelada) {
    console.log(`Cita de ${paciente} ha sido cancelada.`);
  } else {
    console.log("No se encontró una cita para ese paciente.");
  }
}

// Función para mostrar las citas registradas
function mostrarCitas(): void {
  console.log("\nCitas registradas:");
  if (citas.length === 0) {
    console.log("No hay citas registradas.");
    return;
  }

  for (let i = 0; i < citas.length; i++) {
    console.log(`Paciente: ${citas[i].paciente}, Fecha: ${citas[i].fecha}`);
  }
}

// Programa principal
while (true) {
  console.log(
    "\n1. Registrar cita\n2. Cancelar cita\n3. Mostrar citas\n4. Salir"
  );
  const opcion = readlineSync.questionInt("Seleccione una opción: ");

  switch (opcion) {
    case 1:
      const paciente = readlineSync.question(
        "Ingrese el nombre del paciente: "
      );
      const fecha = readlineSync.question(
        "Ingrese la fecha de la cita (formato DD/MM/AAAA): "
      );
      registrarCita(paciente, fecha);
      break;

    case 2:
      const pacienteCancelar = readlineSync.question(
        "Ingrese el nombre del paciente cuya cita desea cancelar: "
      );
      cancelarCita(pacienteCancelar);
      break;

    case 3:
      mostrarCitas();
      break;

    case 4:
      console.log("Saliendo del programa...");
      process.exit(0);

    default:
      console.log("Opción inválida.");
      break;
  }
}

// aulas

function asignarAula(cantidadInfantes: number): string {
  // Definir las capacidades de las aulas
  const capacidadAzul = 40;
  const capacidadVerde = 35;
  const capacidadAmarilla = 30;

  // Calcular los bancos vacíos para cada aula
  const bancosVaciosAzul = capacidadAzul - cantidadInfantes;
  const bancosVaciosVerde = capacidadVerde - cantidadInfantes;
  const bancosVaciosAmarilla = capacidadAmarilla - cantidadInfantes;

  // Verificar si es posible asignar el número de infantes a un aula
  if (cantidadInfantes > capacidadAzul) {
    return "No hay aulas disponibles con capacidad suficiente.";
  }

  // Crear un objeto para asociar aulas con bancos vacíos
  const aulas = [
    {
      color: "Azul",
      bancosVacios: bancosVaciosAzul >= 0 ? bancosVaciosAzul : Infinity,
    },
    {
      color: "Verde",
      bancosVacios: bancosVaciosVerde >= 0 ? bancosVaciosVerde : Infinity,
    },
    {
      color: "Amarilla",
      bancosVacios: bancosVaciosAmarilla >= 0 ? bancosVaciosAmarilla : Infinity,
    },
  ];

  // Encontrar el aula con la mínima cantidad de bancos vacíos
  const aulaAsignada = aulas.reduce((aulaMinima, aulaActual) => {
    return aulaActual.bancosVacios < aulaMinima.bancosVacios
      ? aulaActual
      : aulaMinima;
  });

  return aulaAsignada.color;
}

// Solicitar al usuario el número de infantes
const cantidadInfantes = readlineSync.questionInt(
  "Ingrese la cantidad de infantes: "
);

// Asignar el aula y mostrar el resultado
const aulaAsignada = asignarAula(cantidadInfantes);
console.log("El aula asignada es:", aulaAsignada);

// multiplicar arreglo

function multiplicarArreglo(
  arreglo1: number[],
  arreglo2: number[],
  resultado: number[]
): void {
  // Verificar que los tres arreglos tengan el mismo tamaño
  if (
    arreglo1.length !== arreglo2.length ||
    arreglo1.length !== resultado.length
  ) {
    console.log("Los arreglos no tienen el mismo tamaño.");
    return;
  }

  // Multiplicar cada posición de los dos primeros arreglos y almacenar el resultado en el tercer arreglo
  for (let i = 0; i < arreglo1.length; i++) {
    resultado[i] = arreglo1[i] * arreglo2[i];
  }
}

// Ejemplo de uso:
const arreglo1: number[] = [2, 4, 6, 8];
const arreglo2: number[] = [1, 3, 5, 7];
const resultado: number[] = new Array(arreglo1.length); // Inicializar el tercer arreglo

multiplicarArreglo(arreglo1, arreglo2, resultado);

console.log("Resultado de la multiplicación:", resultado);

// camelCase

import * as readlineSync from "readline-sync";

// Función que convierte un texto en camelCase
function toCamelCase(text: string): string {
  return text
    .toLowerCase() // Convierte todo el texto a minúsculas
    .split(" ") // Separa las palabras por espacios
    .map(
      (word, index) =>
        index === 0
          ? word // La primera palabra permanece en minúsculas
          : word.charAt(0).toUpperCase() + word.slice(1) // Las siguientes palabras tienen la primera letra en mayúsculas
    )
    .join(""); // Une todas las palabras sin espacios
}

// Solicitar texto al usuario
const inputText: string = readlineSync.question("Ingresa el texto: ");

// Convertir a camelCase
const camelCaseText: string = toCamelCase(inputText);

// Imprimir el resultado
console.log("Texto en camelCase: ", camelCaseText);
