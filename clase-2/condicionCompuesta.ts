//si tengo las luces encendidas y nafta puedo manejar de noche

//cuando se cumple un valor booleano? true
let lucesEncendidas: boolean = false;
//si tengo nafta, nafta distinto a 0
let litrosNafta: number = 10;

if(lucesEncendidas && litrosNafta > 0){
    console.log('Puedo manejar de noche')
} else {
    console.log('No puedo manejar de noche')
}