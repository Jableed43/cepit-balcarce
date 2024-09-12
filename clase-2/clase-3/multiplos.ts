
// Variables
const limiteInferior: number = 1;
const limiteSuperior: number = 100;
let multiploDeDos: boolean;
let multiploDeTres: boolean;

// Ciclo para recorrer los números del límite inferior al superior
for (let numero = limiteInferior; numero <= limiteSuperior; numero++) {
  // Verificar si el número es múltiplo de 2 y/o de 3
  multiploDeDos = numero % 2 === 0;
  multiploDeTres = numero % 3 === 0;

  // Imprimir si es múltiplo de 2 o de 3
  if (multiploDeDos || multiploDeTres) {
    console.log(numero);
  }
}
