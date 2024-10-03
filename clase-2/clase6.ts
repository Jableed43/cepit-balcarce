// Un consultorio médico necesita gestionar las citas de sus pacientes. El sistema debe permitir las siguientes acciones:
// Registrar una cita médica (nombre del paciente, apellido, dni y fecha).
// Cancelar una cita médica ingresando el dni del paciente.
// Mostrar las citas registradas.
// Salir del sistema.
// El sistema debe verificar si ya existe una cita para un paciente antes de agregar una nueva.

import rls from "readline-sync";

// Tipar la cita medica

//interface es un contrato, que determina la estructura de un objeto
interface CitaMedica {
  nombre: string;
  apellido: string;
  dni: number;
  fecha: string;
}

let citas: CitaMedica[] = [];

function registrarCita(
  nombre: string,
  apellido: string,
  dni: number,
  fecha: string
): void {
  //Flag o bandera, que determina situacion actual de estado
  let citaExistente: boolean = false;

  //considerando nuestro listado de citas deberiamos ver si hay una existente para el paciente

  for (let index = 0; index < citas.length; index++) {
    if (citas[index].dni === dni) {
      citaExistente = true;
      console.log("Ya existe una cita registrada para ese paciente");
      return;
    }
  }
  //Creamos un objeto y lo pusheamos
  citas.push({ nombre, apellido, dni, fecha });
  console.log(
    `Cita registrada para ${nombre} ${apellido}, dni: ${dni}, el dia ${fecha}`
  );
}

function cancelarCita(dni: number): void {
  let citaCancelada: boolean = false;
  if (citas.length === 0) {
    //Empty state, como nos manejamos cuando el dato está vacío
    console.log("No hay citas registradas");
    return;
  }

  for (let index = 0; index < citas.length; index++) {
    if (citas[index].dni == dni) {
      citas.splice(index, 1);
      citaCancelada = true;
      console.log(`Cita cancelada de ${dni}`);
    } else {
      console.log(`No se encontró una cita para el paciente ${dni}`);
    }
  }
}

function mostrarCitas(): void {
  //Primero se suele validar
  if (citas.length === 0) {
    console.log("No hay citas registradas");
    return;
  }

  for (let index = 0; index < citas.length; index++) {
    console.log(
      `Paciente nombre: ${citas[index].nombre}, apellido: ${citas[index].apellido}, dni: ${citas[index].dni}, el dia: ${citas[index].fecha} `
    );
  }
}

while (true) {
  console.log(
    "\n1. Registrar Cita\n2. Cancelar Cita\n3. Mostrar Citas\n4. Salir "
  );

  const option = rls.questionInt("Seleccione una opcion: ");

  switch (option) {
    case 1:
      const nombre = rls.question("Ingrese nombre del paciente: ");
      const apellido = rls.question("Ingrese apellido del paciente: ");
      const dni = rls.questionInt("Ingrese dni del paciente: ");
      const fecha = rls.question(
        "Ingrese fecha de la cita (formato DD/MM/AAAA): "
      );
      registrarCita(nombre, apellido, dni, fecha);
      break;

    case 2:
      const dniPaciente = rls.questionInt(
        "Ingrese el dni del paciente cuya cita desea cancelar"
      );
      cancelarCita(dniPaciente);
      break;

    case 3:
      mostrarCitas();
      break;

    case 4:
      console.log("Saliendo del programa");
      process.exit(0);
      break;
    default:
      console.log("Opcion inválida");
      break;
  }
}
