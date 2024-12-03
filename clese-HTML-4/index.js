let btn_esconder = document.getElementById('btn-esconder');
let div_contenido = document.getElementById('div-contenido');

function toggleButton(){
    div_contenido.classList.toggle('hidden');
    if(div_contenido.classList.contains('hidden'))
        btn_esconder.textContent = "Mostrar contenido";
    else
        btn_esconder.textContent = "Ocultar contenido";
}

btn_esconder.addEventListener('click',toggleButton);

let btns = document.getElementsByClassName('btn');

console.log(btns);

//querySelector

let btn_query = document.querySelector('button');

function cliqueado(){
    console.log('click');
    alert("se cliqueo este boton");
}

btn_query.addEventListener('click',cliqueado);

let btns_query = document.querySelectorAll('button');
console.log(btns_query[2]);

let nodo_div = document.querySelectorAll('div');
console.log(nodo_div);

let btn_class = document.querySelectorAll('.btn');
console.log(btn_class);

for(let i=0;i<btn_class.length;i++){
    btn_class[i].addEventListener('click',function() {
        console.log(`se cliqueo el boton ${this.textContent}`);
    })
}

//Ejercicio lista tareas

const task_form = document.getElementById('tarea-formulario');
const task_input = document.getElementById('tarea-input');
const task_list = document.getElementById('tarea-lista');

task_form.addEventListener('submit',(event)=>{
    event.preventDefault();

    let item = document.createElement('li');
    item.textContent = task_input.value.trim();
    task_list.appendChild(item);

    task_input.value = '';  //Lean

    // task_form.reset();  //Javi

})


let timer = setTimeout(()=>{
    console.log("timeout");
},5000);


let timer2 = setInterval(()=>{
    console.log("interval");
},1000)



