let seleccionarId = document.querySelector('#p1');

console.log(seleccionarId);

let seleccionarUnaClase = document.querySelector('.p2');

console.log(seleccionarUnaClase);

let seleccionarAllClase = document.querySelectorAll('.p2');


console.log(seleccionarAllClase);

console.log("FOR");


seleccionarAllClase.forEach(e => console.log(e));